import React from 'react';

class MainNav extends React.Component {
    render () {
        return (
          <nav className="main-nav">
              <a class="navbar-brand" href="/">
                  <div className="logo">LINDSAY SAYRE</div>
              </a>
              <div className="nav-buttons">
                  <a href="https://www.linkedin.com/in/lindsaysayre/" target="_blank"  rel="noopener noreferrer">
                      <i className="fa fa-linkedin fa-2x"></i>
                  </a>
                  <a href="https://github.com/lindsaysayre/" target="_blank"  rel="noopener noreferrer">
                      <i className="fa fa-github fa-2x"></i>
                  </a>
                  <a href="http://lindsaymsayre.tumblr.com/" target="_blank"  rel="noopener noreferrer">
                      <i className="fa fa-tumblr fa-2x"></i>
                  </a>
              </div>
          </nav>
        );
    }
};

export default MainNav;
