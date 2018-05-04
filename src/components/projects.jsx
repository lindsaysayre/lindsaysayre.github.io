import React from 'react';
import sampleText from './sampleText';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focus: 0};

        this.startSwipe = this.startSwipe.bind(this);
        this.arrestInterval = this.arrestInterval.bind(this);
        this.resumeInterval = this.resumeInterval.bind(this);
        this.onRightArrow = this.onRightArrow.bind(this);
        this.onLeftArrow  = this.onLeftArrow.bind(this);
        this.getSliderStyle  = this.getSliderStyle.bind(this);
    }

    componentDidMount() {
        window.addEventListener( 'resize', this.startSwipe );

        this.resumeInterval();
    }

    componentWillUnmount() {
        window.removeEventListener( 'resize', this.startSwipe );

        this.arrestInterval();
    }

    startSwipe() {
        if (window.innerWidth > 800) {
            this.resumeInterval();
        } else {
            this.arrestInterval();
        }
        this.setState({focus: 0});
    }

    arrestInterval() {
        clearInterval(this.interval);
        this.interval = undefined;
    }

    resumeInterval() {
        if (!this.interval && window.innerWidth > 800) {
            this.interval = setInterval( this.onRightArrow, 4000 );
        }
    }

    onRightArrow() {
        this.setState({focus: this.state.focus === 3 ? 0 : this.state.focus + 1 });
    }

    onLeftArrow() {
        this.setState({focus: this.state.focus === 0 ? 3 : this.state.focus - 1 });
    }

    getSliderStyle() {
        return {marginLeft: -(this.state.focus * window.innerWidth * 0.62)};
    }

    render() {
        return (
            <div>
                <div className="project-container-container">
                    <i className="fa fa-chevron-left fa-4x mobile-disappear" 
                        onClick={this.onLeftArrow}
                        onMouseEnter={this.arrestInterval}
                        onMouseLeave={this.resumeInterval}>
                    </i>
                    <div className="project-container">
                        <div className="project-slider"
                             onMouseEnter={this.arrestInterval}
                             onMouseLeave={this.resumeInterval}
                             style={this.getSliderStyle()}>
                            <div className="project project-1">
                                <div className="project-overlay">
                                    <h1>Amazon & Ecommerce Consultant</h1>
                                    <p>{sampleText.project1}</p>
                                    <div>
                                        <a href="https://www.upwork.com/o/profiles/users/_~01603eb21c03bcb13d/" alt="upwork.com" target="_blank"  rel="noopener noreferrer">
                                            <i className="fa fa-external-link fa-4x" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project project-2">
                                <div className="project-overlay">
                                    <h1>I've worked with...</h1>
                                    <p>{sampleText.project2}</p>
                                </div>
                            </div>
                            <div className="project project-3">
                                <div className="project-overlay">
                                    <h1>Marketing Consultant</h1>
                                    <p>{sampleText.project3}</p>
                                </div>
                            </div><div className="project project-4">
                                <div className="project-overlay">
                                    <h1>RamenRevolt.com</h1>
                                    <p>{sampleText.project4}</p>
                                    <div>
                                        <a href="https://www.ramenrevolt.com/" alt="See it live!" target="_blank"
                                           rel="noopener noreferrer">
                                            <i className="fa fa-external-link fa-4x" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i className="fa fa-chevron-right fa-4x mobile-disappear"
                        onClick={this.onRightArrow}
                        onMouseEnter={this.arrestInterval}
                        onMouseLeave={this.resumeInterval}>
                    </i>
                </div>
                <div className="project-nav mobile-disappear">
                    <div className={this.state.focus === 0 ?
                        'project-nav-button active' : 'project-nav-button'}
                         onClick={() => this.setState.bind(this, {focus: 0})}/>
                    <div className={this.state.focus === 1 ?
                        'project-nav-button active' : 'project-nav-button'}
                         onClick={() => this.setState.bind(this, {focus: 1})}/>
                    <div className={this.state.focus === 2 ?
                        'project-nav-button active' : 'project-nav-button'}
                         onClick={() => this.setState.bind(this, {focus: 2})}/>
                    <div className={this.state.focus === 3 ?
                        'project-nav-button active' : 'project-nav-button'}
                         onClick={() => this.setState.bind(this, {focus: 3})}/>
                </div>
            </div>
        );
    }
}
;

export default Projects;