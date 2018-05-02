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
                    <img src="assets/icons/adobe.png" alt="adobe"/>
                    <img src="assets/icons/analytics.png" alt="analytics"/>
                    <img src="assets/icons/hubspot.png" alt="hubspot"/>
                    <img src="assets/icons/wordpress.png" alt="wordpress"/>
                    <br />
                    <strong> Certifications | </strong>Inbound Marketing (HubSpot), Google Analytics<br /><br />
                    <strong>Content Creation | </strong>Adobe Creative Suite, Copywriting, WordPress<br /><br />
                    <strong>Writing | </strong>SEO, Blog Posts, Email Marketing, Ad Copy, Product Descriptions<br /><br />
                    <strong>Social Media | </strong>Strategy, Channel Management, Direct Customer Communication<br /><br />
                    <strong>Market Research | </strong>Writing & Presenting Reports, Customer Segmentation & Positioning, Competitor Analysis<br /><br />
                    <br /><br />
                  </center>
                </pre>
            );
        } else {
            return (
                <div className="experience-content">
                    { sampleText.summary }<br/>
                </div>
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