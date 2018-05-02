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
                  <a href="https://www.upwork.com/o/profiles/users/_~01603eb21c03bcb13d/" target="_blank"  rel="noopener noreferrer">
                    <img className="upwork" src="assets/icons/upwork.png" alt="upwork"/>

                  </a>
              </div>
          </nav>
        );
    }
};

export default MainNav;
