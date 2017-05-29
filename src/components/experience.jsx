import React from 'react';
import ReactGA from 'react-ga';
import Modal from'react-modal';
import sampleText from'./sampleText';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: 'summary'};

    }

    componentDidMount() {
        ReactGA.initialize('UA-99352749-1', {debug: true});
        ReactGA.event({
            category: 'experince',
            action: 'Experience component load.'
        });
    }

    setActive(category) {
        this.setState({active: category});
    }

    isActive(category) {
        return this.state.active === category ? 'active' : '';
    }

    activeContent() {
        if (this.state.active === 'resume') {
            return this.getModal();
        } else if (this.state.active === 'technologies') {
            return (
                <pre className="experience-content">
                  <center className="icons">
                    <img src="assets/icons/excel.png" alt="excel"/>
                    <img src="assets/icons/access.png" alt="access"/>
                    <img src="assets/icons/spss.png" alt="spss"/>
                    <img src="assets/icons/powerpoint.png" alt="excel"/>
                    <img src="assets/icons/wordpress.png" alt="wordpress"/>
                    <img src="assets/icons/html5.png" alt="html5"/>
                    <img src="assets/icons/css3.png" alt="css3"/><br />
                    <strong> Data Analysis | </strong>Microsoft Excel, Microsoft Access, SPSS<br /><br />
                    <strong>Content Creation | </strong>Adobe Creative Suite, SEO, Blog Writing, WordPress, Press Releases<br /><br />
                    <strong>Research | </strong>Survey Building and Analysis, Writing Reports<br /><br />
                    <strong>Social Media | </strong>Strategy, Channel Management, Direct Customer Communication<br /><br />
                    <strong>Learning | </strong>SQL, HTML5, CSS3, Javascript, Git, GitHub<br /><br />
                    <br /><br />
                  </center>
                </pre>
            );
        } else {
            return (
                <pre className="experience-content">
                    { sampleText.summary }<br/><br />{ sampleText.summary_1 }<br /><br />{ sampleText.summary_2 }
                </pre>
            );
        }
    }

    getModal() {
        ReactGA.event({
            category: 'resume',
            action: 'Opened resume.'
        });

        const modalStyle = ({
            overlay: {
                position: 'fixed',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                zIndex: 55,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            content: {
                left: 'auto',
                right: 'auto',
                padding: 0,
                overflowY: 'hidden',
                overflowX: 'hidden'
            }
        });

        /*const loader = (
            <div className="center-spinner">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        );
        */

        return (
            <Modal
                isOpen={true}
                style={modalStyle}
                onRequestClose={ () => this.setState({active: 'summary'}) }
            >
                <div className="modal-content">
                    <img className="resume" src="assets/images/resume.png" alt="resume"/>
                </div>
                <div className="x-button" onClick={() => this.setState({active: 'summary'})}>
                    <i className="fa fa-times-circle fa-2x" aria-hidden="false"></i>
                </div>
            </Modal>);
    }

    render() {
        return (
            <div className="experience">
                <div className="experience-circles">
                    <div className={"circle " + this.isActive('summary')}
                         onClick={this.setActive.bind(this, 'summary')}>
                        <div>
                            ABOUT ME
                        </div>
                    </div>
                    <div className={"circle " + this.isActive('resume')}
                         onClick={this.setActive.bind(this, 'resume')}>
                        <div>
                            RESUME
                        </div>
                    </div>
                    <div className={"circle " + this.isActive('technologies')}
                         onClick={this.setActive.bind(this, 'technologies')}>
                        <div>
                            SKILLS
                        </div>
                    </div>
                </div>
                {this.activeContent()}
            </div>
        );
    }
};

export default Experience;