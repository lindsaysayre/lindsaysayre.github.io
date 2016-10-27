/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Modal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var MainNav = __webpack_require__(1);
	var PointNav = __webpack_require__(2);
	var Experience = __webpack_require__(3);
	//const Projects = require('./projects');
	var Contact = __webpack_require__(5);
	
	var App = React.createClass({
	  displayName: 'App',
	  getInitialState: function getInitialState() {
	    return { scrollState: 0 };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    document.addEventListener('scroll', function () {
	      var newScrollState = Math.round(window.scrollY / window.innerHeight);
	      _this.setState({ scrollState: newScrollState });
	    });
	  },
	  setScrollInterval: function setScrollInterval(e) {
	    var siblings = e.currentTarget.parentElement.children;
	    var current = Array.from(siblings).indexOf(e.currentTarget);
	    this.scrollTo(current);
	  },
	  scrollTo: function scrollTo(current) {
	    var _this2 = this;
	
	    var scrollHeight = current * window.innerHeight;
	    if (current === 3) {
	      scrollHeight -= 20;
	    }
	
	    clearInterval(this.scrollInterval);
	
	    this.scrollInterval = setInterval(function () {
	      if (window.scrollY > scrollHeight + 5 || window.scrollY < scrollHeight - 5) {
	        var factor = Math.abs(window.scrollY - scrollHeight);
	        var diff = window.scrollY < scrollHeight ? 2 : -2;
	        if (factor > 50) diff *= 5;
	
	        var newY = window.scrollY + diff;
	        window.scrollTo(0, newY);
	      } else {
	        clearInterval(_this2.scrollInterval);
	      }
	    }, 1);
	  },
	  render: function render() {
	    var _this3 = this;
	
	    return React.createElement(
	      'main',
	      null,
	      React.createElement(MainNav, { mainLogoClick: function mainLogoClick() {
	          return _this3.scrollTo(0);
	        } }),
	      React.createElement(PointNav, { setScrollState: this.setScrollInterval,
	        scrollState: this.state.scrollState }),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'section',
	          { id: 'main-banner' },
	          React.createElement('div', { className: 'main-banner-overlay' }),
	          React.createElement(
	            'div',
	            { className: 'main-description' },
	            React.createElement(
	              'h1',
	              null,
	              'LINDSAY SAYRE'
	            ),
	            React.createElement(
	              'h3',
	              null,
	              'Marketing Strategist and Aspiring Entrepreneur.'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'down-arrow',
	              onClick: function onClick() {
	                return _this3.scrollTo(1);
	              } },
	            React.createElement(
	              'a',
	              null,
	              React.createElement('i', { className: 'fa fa-arrow-circle-down fa-4x' })
	            )
	          )
	        ),
	        React.createElement(
	          'section',
	          { id: 'experience' },
	          React.createElement(Experience, null)
	        ),
	        React.createElement(
	          'section',
	          { id: 'contact' },
	          React.createElement(Contact, { upArrowClick: function upArrowClick() {
	              return _this3.scrollTo(0);
	            } })
	        )
	      )
	    );
	  }
	});
	
	document.addEventListener('DOMContentLoaded', function () {
	  ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
	  Modal.setAppElement(document.getElementById('root'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	module.exports = React.createClass({
	  displayName: "exports",
	  render: function render() {
	    return React.createElement(
	      "nav",
	      { className: "main-nav" },
	      React.createElement(
	        "a",
	        { onClick: this.props.mainLogoClick },
	        React.createElement(
	          "div",
	          { className: "logo" },
	          "LINDSAY SAYRE"
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "nav-buttons" },
	        React.createElement(
	          "a",
	          { href: "https://www.linkedin.com/in/lindsaysayre/",
	            target: "_blank" },
	          React.createElement("i", { className: "fa fa-linkedin fa-2x" })
	        ),
	        React.createElement(
	          "a",
	          { href: "https://github.com/lindsaysayre/",
	            target: "_blank" },
	          React.createElement("i", { className: "fa fa-github fa-2x" })
	        ),
	        React.createElement(
	          "a",
	          { href: "http://lindsaymsayre.tumblr.com/",
	            target: "_blank" },
	          React.createElement("i", { className: "fa fa-tumblr fa-2x" })
	        )
	      )
	    );
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	module.exports = React.createClass({
	  displayName: "exports",
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "point-nav" },
	      React.createElement("div", { className: "point-nav-buttons-background" }),
	      React.createElement(
	        "nav",
	        { className: "point-nav-buttons" },
	        React.createElement(
	          "a",
	          { onClick: this.props.setScrollState,
	            className: this.props.scrollState == 0 ? 'active' : '' },
	          React.createElement("i", { className: "fa fa-home fa-2x" }),
	          React.createElement(
	            "p",
	            null,
	            "Home"
	          )
	        ),
	        React.createElement(
	          "a",
	          { onClick: this.props.setScrollState,
	            className: this.props.scrollState == 1 ? 'active' : '' },
	          React.createElement("i", { className: "fa fa-file-text fa-2x" }),
	          React.createElement(
	            "p",
	            null,
	            "Experience"
	          )
	        ),
	        React.createElement(
	          "a",
	          { onClick: this.props.setScrollState,
	            className: this.props.scrollState == 3 ? 'active' : '' },
	          React.createElement("i", { className: "fa fa-info fa-2x" }),
	          React.createElement(
	            "p",
	            null,
	            "Contact"
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Modal = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var sampleText = __webpack_require__(4);
	
	module.exports = React.createClass({
	  displayName: 'exports',
	  getInitialState: function getInitialState() {
	    return { active: 'summary' };
	  },
	  setActive: function setActive(category) {
	    this.setState({ active: category });
	  },
	  isActive: function isActive(category) {
	    return this.state.active === category ? 'active' : '';
	  },
	  activeContent: function activeContent() {
	    if (this.state.active == 'resume') {
	      return this.getModal();
	    } else if (this.state.active == 'technologies') {
	      return React.createElement(
	        'pre',
	        { className: 'experience-content' },
	        React.createElement(
	          'center',
	          { className: 'icons' },
	          React.createElement('img', { src: 'assets/icons/excel.png' }),
	          React.createElement('img', { src: 'assets/icons/access.png' }),
	          React.createElement('img', { src: 'assets/icons/spss.png' }),
	          React.createElement('img', { src: 'assets/icons/powerpoint.png' }),
	          React.createElement('img', { src: 'assets/icons/wordpress.png' }),
	          React.createElement('img', { src: 'assets/icons/html5.png' }),
	          React.createElement('img', { src: 'assets/icons/css3.png' }),
	          React.createElement('br', null),
	          React.createElement(
	            'strong',
	            null,
	            ' Data Analysis | '
	          ),
	          'Microsoft Excel, Microsoft Access, SPSS',
	          React.createElement('br', null),
	          React.createElement('br', null),
	          React.createElement(
	            'strong',
	            null,
	            'Content Creation | '
	          ),
	          'Adobe Creative Suite, SEO, Blog Writing, WordPress, Press Releases',
	          React.createElement('br', null),
	          React.createElement('br', null),
	          React.createElement(
	            'strong',
	            null,
	            'Research | '
	          ),
	          'Survey Building and Analysis, Writing Reports',
	          React.createElement('br', null),
	          React.createElement('br', null),
	          React.createElement(
	            'strong',
	            null,
	            'Social Media | '
	          ),
	          'Strategy, Channel Management, Direct Customer Communication',
	          React.createElement('br', null),
	          React.createElement('br', null),
	          React.createElement(
	            'strong',
	            null,
	            'Learning | '
	          ),
	          'SQL, HTML5, CSS3, Javascript, Git, GitHub',
	          React.createElement('br', null),
	          React.createElement('br', null),
	          React.createElement('br', null),
	          React.createElement('br', null)
	        )
	      );
	    } else {
	      return React.createElement(
	        'pre',
	        { className: 'experience-content' },
	        sampleText.summary,
	        React.createElement('br', null),
	        React.createElement('br', null),
	        sampleText.summary_1,
	        React.createElement('br', null),
	        React.createElement('br', null),
	        sampleText.summary_2
	      );
	    }
	  },
	  getModal: function getModal() {
	    var _this = this;
	
	    var modalStyle = {
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
	    };
	
	    var loader = React.createElement(
	      'div',
	      { className: 'center-spinner' },
	      React.createElement(
	        'div',
	        { className: 'spinner' },
	        React.createElement('div', { className: 'bounce1' }),
	        React.createElement('div', { className: 'bounce2' }),
	        React.createElement('div', { className: 'bounce3' })
	      )
	    );
	
	    return React.createElement(
	      Modal,
	      {
	        isOpen: true,
	        style: modalStyle,
	        onRequestClose: function onRequestClose() {
	          return _this.setState({ active: 'summary' });
	        }
	      },
	      React.createElement(
	        'div',
	        { className: 'x-button',
	          onClick: function onClick() {
	            return _this.setState({ active: 'summary' });
	          } },
	        React.createElement('i', { className: 'fa fa-times-circle fa-2x', 'aria-hidden': 'true' })
	      ),
	      React.createElement(
	        'div',
	        { className: 'modal-content' },
	        React.createElement('img', { className: 'resume', src: 'assets/images/resume.png' })
	      )
	    );
	  },
	  render: function render() {
	    var _this2 = this;
	
	    return React.createElement(
	      'div',
	      { className: 'experience' },
	      React.createElement(
	        'div',
	        { className: 'experience-circles' },
	        React.createElement(
	          'div',
	          { className: "circle " + this.isActive('summary'),
	            onClick: function onClick() {
	              return _this2.setActive('summary');
	            } },
	          React.createElement(
	            'div',
	            null,
	            'ABOUT ME'
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: "circle " + this.isActive('resume'),
	            onClick: function onClick() {
	              return _this2.setActive('resume');
	            } },
	          React.createElement(
	            'div',
	            null,
	            'RESUME'
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: "circle " + this.isActive('technologies'),
	            onClick: function onClick() {
	              return _this2.setActive('technologies');
	            } },
	          React.createElement(
	            'div',
	            null,
	            'SKILLS'
	          )
	        )
	      ),
	      this.activeContent()
	    );
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  summary: 'I’m Lindsay, an Ohio State University student with a passion for marketing and entrepreneurship. I have worked at a startup, a multi-billion dollar corporation, and studied everything in between. My experience spans across a wide range of products and services, so I specialize in jumping in with both feet and getting up to speed quickly. I love a challenge and thrive in a dynamic work environment where I get to wear many hats.',
	  summary_1: 'I have experience in social media, digital marketing, and data analysis. I managed all social media channels at a beverage startup called Life Support. With a focus on growth, I developed and implemented a strategy, created content, and engaged with customers. I have also worked at American Greetings, where I focused on analyzing customer data and past sales metrics to identify opportunities to improve productivity and create future retail strategies.',
	  summary_2: 'When I’m not working I’m probably on the beach volleyball court, whipping up something in the kitchen, or boarding a plane for my next adventure.',
	  project1: 'A handspun framework in the style of Rails.',
	  project2: 'A fruit foraging app built on Rails with a React/Redux frontend.',
	  project3: 'A simple live chat app written in Node using socket.io.',
	  project4: 'A simple game of snake written using the jQuery library.'
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var sampleText = __webpack_require__(4);
	
	module.exports = React.createClass({
	  displayName: 'exports',
	  render: function render() {
	
	    return React.createElement(
	      'div',
	      { className: 'contact-container' },
	      React.createElement(
	        'div',
	        { className: 'contact-box' },
	        React.createElement(
	          'div',
	          { className: 'profile-description' },
	          React.createElement(
	            'h2',
	            null,
	            'CONTACT ME'
	          ),
	          React.createElement(
	            'h3',
	            null,
	            'lindsay@thesayres.net'
	          ),
	          React.createElement(
	            'p',
	            null,
	            'Want to discuss a marketing gig for your organization or community project?',
	            React.createElement('br', null),
	            React.createElement('br', null),
	            'Don\'t hesitate to reach out.',
	            React.createElement('br', null),
	            React.createElement('br', null),
	            'Photographs & Website by ',
	            React.createElement(
	              'strong',
	              null,
	              'Lindsay Sayre'
	            ),
	            ' using ',
	            React.createElement(
	              'strong',
	              null,
	              'React.JS'
	            ),
	            '.'
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'up-arrow', onClick: this.props.upArrowClick },
	          React.createElement(
	            'a',
	            null,
	            React.createElement('i', { className: 'fa fa-arrow-circle-up fa-4x' })
	          )
	        )
	      )
	    );
	  }
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map