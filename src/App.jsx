import React from 'react';
import styled from 'styled-components';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './App.css';

import AboutMe from './pages/AboutMe';

const ScrollView = styled.div`
  overscroll-y-auto
`

function App() {
  return (
    <ScrollView>
      {/* <div>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Docs
            </a>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
                        <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
                        <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
                        <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
                        </ul>
                    </div>
                    </div>
                </nav>

                <Element name="test1" className="element h-80 bg-slate-500" >
                    test 1
                </Element>

                <Element name="test2" className="element h-80">
                    test 2
                </Element>

                <Element name="test3" className="element h-80">
                    test 3
                </Element>

                <Element name="test4" className="element h-80">
                    test 4
                </Element>
                <Element name="test5" className="element h-80">
                    test 5
                </Element>
                <Element name="test6" className="element h-80">
                    test 6
                </Element> */}
      <AboutMe />
      <div style={{height : "500px", backgroundColor : "gray"}}/>
      <div style={{height : "500px", backgroundColor : "blue"}}/>
      {/* </div> */}
    </ScrollView>
  );
}

export default App;
