import React from 'react';
import sampleText from './sampleText';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focus: 0};
    }

    componentDidMount() {
        this.resumeInterval();

        document.addEventListener('scroll', this.onScroll.bind(this));

        window.addEventListener('resize', () => {
            if (window.innerWidth > 800) {
                this.resumeInterval();
            } else {
                this.arrestInterval();
                this.setState({focused: 0});
            }
        });
    }

    arrestInterval() {
        clearInterval(this.interval);
        this.interval = undefined;
    }

    resumeInterval() {
        if (!this.interval && window.innerWidth > 800) {
            this.interval = setInterval(() => this.onRightArrow(), 3000);
        }
    }

    componentWillUnmount() {
        this.arrestInterval();
    }

    onRightArrow() {
        this.setState({focused: (this.state.focused + 1) % 4});
    }

    onLeftArrow() {
        this.setState({focused: (this.state.focused - 1 + 4) % 4});
    }

    getSliderStyle() {
        return {marginLeft: -(this.state.focused * window.innerWidth * 0.62)};
    }

    render() {
        return (
            <div>
                <div className="project-container-container">
                    <i className="fa fa-chevron-left fa-4x mobile-disappear" onClick={this.onLeftArrow}></i>
                    <div className="project-container">
                        <div className="project-slider"
                             onMouseEnter={this.arrestInterval}
                             onMouseLeave={this.resumeInterval}
                             style={this.getSliderStyle()}>
                            <div className="project project-1">
                                <div className="project-overlay">
                                    <h1>Miniframe</h1>
                                    <p>{sampleText.project1}</p>
                                    <div>
                                        <a href="https://github.com/buckyinsfo/thinkscript.git" alt="Github"
                                           target="_blank">
                                            <i className="fa fa-github fa-4x" aria-hidden="true"></i>
                                        </a>
                                        <a href="https://miniframe.herokuapp.com/" alt="See it live!" target="_blank">
                                            <i className="fa fa-external-link fa-4x" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project project-2">
                                <div className="project-overlay">
                                    <h1>Harvst</h1>
                                    <p>{sampleText.project2}</p>
                                    <div>
                                        <a href="https://github.com/buckyinsfo/bitstarter.git" alt="Github"
                                           target="_blank">
                                            <i className="fa fa-github fa-4x" aria-hidden="true"></i>
                                        </a>
                                        <a href="https://miniframe.herokuapp.com/" alt="See it live!" target="_blank">
                                            <i className="fa fa-external-link fa-4x" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <i className="fa fa-chevron-right fa-4x mobile-disappear"
                       onClick={this.onRightArrow}></i>
                </div>
                <div className="project-nav mobile-disappear">
                    <div className={this.state.focused === 0 ?
                        'project-nav-button active' : 'project-nav-button'}
                         onClick={() => this.setState({focused: 0})}/>
                </div>
            </div>
        );
    }
}
;

export default Projects;
