import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/experience'
import Expertise from './components/expertise';
import Skills from './components/Skills';
import Education from './components/Education';
import Work from './components/Work';
import Contact from './components/Contact';
import Certifications from './components/certification';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Expertise></Expertise>
          <Skills></Skills>
          <Certifications></Certifications>
          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="9108da04-8439-498d-ab68-2c514d1e029b" data-share-badge-host="https://www.youracclaim.com"></div><script type="text/javascript" async src="//cdn.youracclaim.com/assets/utilities/embed.js"></script>
          <Education></Education>
					<Timeline></Timeline>
          <Work></Work>
          <Contact></Contact>
          	</div>
            
      	</div>
      </div>
    );
  }
}

export default App;
