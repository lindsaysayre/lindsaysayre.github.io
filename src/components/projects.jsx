import React from 'react';
import sampleText from './sampleText';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focus: 0};
    }

    componentDidMount() {
        window.addEventListener('resize', this.startSwipe.bind(this));
        this.resumeInterval();
    }

    startSwipe() {
        if (window.innerWidth > 800) {
            this.resumeInterval();
        } else {
            this.arrestInterval();
        }
        this.setState({focused: 0});
    }

    arrestInterval() {
        clearInterval(this.interval);
        this.interval = undefined;
    }

    resumeInterval() {
        if (!this.interval && window.innerWidth > 800) {
            this.interval = setInterval( this.onRightArrow.bind(this), 4000 );
        }
    }

    componentWillUnmount() {
        this.arrestInterval();
    }

    onRightArrow() {
        this.setState({focused: this.state.focused === 0 ? 1 : 0});
    }

    onLeftArrow() {
        this.setState({focused: !this.state.focused === 0 ? 1 : 0});
    }

    getSliderStyle() {
        return {marginLeft: -(this.state.focused * window.innerWidth * 0.62)};
    }

    render() {
        return (
            <div>
                <div className="project-container-container">
                    <i className="fa fa-chevron-left fa-4x mobile-disappear" onClick={this.onLeftArrow.bind(this)}></i>
                    <div className="project-container">
                        <div className="project-slider"
                             onMouseEnter={this.arrestInterval.bind(this)}
                             onMouseLeave={this.resumeInterval.bind(this)}
                             style={this.getSliderStyle()}>
                            <div className="project project-1">
                                <div className="project-overlay">
                                    <h1>RamenRevolt.com</h1>
                                    <p>{sampleText.project1}</p>
                                    <div>
                                        <a href="https://www.ramenrevolt.com/" alt="See it live!" target="_blank"
                                           rel="noopener noreferrer">
                                            <i className="fa fa-external-link fa-4x" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project project-2">
                                <div className="project-overlay">
                                    <h1>Marketing Consultant</h1>
                                    <p>{sampleText.project2}</p>
                                    <div>
                                        <a href="#" alt="See it live!"
                                           target="_blank" rel="noopener noreferrer">
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
                         onClick={() => this.setState.bind(this, {focused: 0})}/>
                    <div className={this.state.focused === 1 ?
                        'project-nav-button active' : 'project-nav-button'}
                         onClick={() => this.setState.bind(this, {focused: 1})}/>
                </div>
            </div>
        );
    }
}
;

export default Projects;
