const React = require('react');
const sampleText = require('./sampleText');

module.exports = React.createClass({
  render () {

    return (
      <div className="contact-container">
        <div className="contact-box">
          <div className="profile-description">
            <h2>CONTACT ME</h2>
            <h3>lindsay@thesayres.net</h3>
            <p>
              I'd love to write code for your community project or organization.
              <br />
              Don't hesitate to reach out.
              <br /><br />
              Photographs by <strong>NickelHoops</strong>.
              <br /><br />
              Site written by <strong>Lindsay Sayre</strong> using <strong>React.JS</strong>.
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
