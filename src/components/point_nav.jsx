import React from 'react';

class PointNav extends React.Component {

    render () {

        return(
            <div className="point-nav">
              <div className="point-nav-buttons-background"></div>
              <nav className="point-nav-buttons">
                <a onClick={this.props.setScrollTarget}
                   className={this.props.scrollIndex === 0 ? 'active' : ''}>
                  <i className="fa fa-home fa-2x"></i>
                  <p>Home</p>
                </a>

                <a onClick={this.props.setScrollTarget}
                   className={this.props.scrollIndex === 1 ? 'active' : ''}>
                  <i className="fa fa-file-text fa-2x"></i>
                  <p>Experience</p>
                </a>

                <a onClick={this.props.setScrollTarget}
                   className={this.props.scrollIndex === 2 ? 'active' : ''}>
                  <i className="fa fa-code fa-2x"></i>
                    <p>Projects</p>
                </a>

                <a onClick={this.props.setScrollTarget}
                   className={this.props.scrollIndex === 3 ? 'active' : ''}>
                    <i className="fa fa-info fa-2x"></i>
                    <p>Contact</p>
                </a>
              </nav>
            </div>
        );
    }
};

export default PointNav;
