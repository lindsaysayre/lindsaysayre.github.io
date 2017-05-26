import React from 'react';
import ReactGA from 'react-ga';
import MainNav from './main_nav';
import PointNav from './point_nav';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { scrollIndex: 0, height: 0 };

    }

    componentDidMount () {
        document.addEventListener('scroll', this.onScroll.bind(this));

        ReactGA.initialize('UA-99352749-1'); //Unique Google Analytics tracking number
        this.logPageView();
    }

    componentWillUnMount () {
        document.removeEventListener('scroll', this.onScroll.bind(this));
    }

    logPageView() {
        ReactGA.set({ page: window.location.pathname + window.location.search });
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    onScroll() {
        let newScrollIndex = Math.round(window.scrollY / window.innerHeight);
        this.setState({scrollIndex: newScrollIndex});

        console.log( "I'm scrolling now.  Y-coord: " + window.scrollY );
    }

    updateHeight() {
        this.setState({ height: window.innerHeight });
    }

    setScrollTarget (e) {
        let siblings = e.currentTarget.parentElement.children;
        let target = Array.from(siblings).indexOf(e.currentTarget);

        this.startScrollToIndex(target);
    }

    startScrollToIndex (target) {
        let scrollHeight = target * window.innerHeight;
        if (target === 2) {
            scrollHeight -= 20;
        }

        clearInterval(this.scrollToIndex);

        this.scrollToIndex = setInterval( this.autoScrollToHt.bind( this, scrollHeight ), 2);
    }

    autoScrollToHt( scrollHeight ) {
        let v_offset = 10;

        if (( window.scrollY > scrollHeight + v_offset ) || ( window.scrollY < scrollHeight - v_offset  )) {
            const factor = Math.abs(window.scrollY - scrollHeight);

            let diff = window.scrollY < scrollHeight ? 2 : -2;
            if (factor > 50) diff *= 5;

            const newY = window.scrollY + diff;
            window.scrollTo(0, newY);
        } else {
            clearInterval(this.scrollToIndex);
        }
    }

    render () {

        let setScrollTarget = this.setScrollTarget.bind(this);
        let scrollToTop = this.startScrollToIndex.bind(this, 0);

        return(
            <div>
                <MainNav height={this.state.height} />
                <PointNav setScrollTarget={setScrollTarget}
                          scrollIndex={this.state.scrollIndex} />
                <div>
                    < section id="main-banner">
                        <div className="main-banner-overlay"></div>
                        <div className="main-description">
                            <h1 >LINDSAY SAYRE</h1>
                            <h3>Marketing Strategist and Entrepreneur.</h3>
                        </div>
                        <div className="down-arrow"
                             onClick={() => this.startScrollToIndex(1)}>
                            <a><i className="fa fa-arrow-circle-down fa-4x"></i></a>
                        </div>
                    </section>
                    <section id="experience">
                        <Experience />
                    </section>
                    <section id="contact">
                        <Contact upArrowClick={scrollToTop}/>
                    </section>

                </div>
            </div>
        );
    }
};
export default Layout;