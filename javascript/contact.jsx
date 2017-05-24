const React = require('react');
const sampleText = require('./sampleText');
const ReactGA = require('react-ga');

module.exports = React.createClass({

  componentDidMount() {
      ReactGA.initialize('UA-99352749-1', { debug: true });
      ReactGA.event({
          category: 'contact',
          action: 'Contact component load.'
      });
  },

  render () {

    return (
      <div className="contact-container">
        <div className="contact-box">
          <div className="profile-description">
            <h2>CONTACT ME</h2>
            <h3>lindsay@thesayres.net</h3>
            <p>
              Want to discuss a marketing gig for your organization or community project?
              <br /><br />
              Don't hesitate to reach out.
              <br /><br />
              Photographs & Website by <strong>Lindsay Sayre</strong> using <strong>React.JS</strong>.
            </p>
          </div>
          <div className="up-arrow" onClick={this.props.upArrowClick}>
            <a><i className="fa fa-arrow-circle-up fa-4x"></i></a>
          </div>
        </div>
      </div>
    );
  }
});
