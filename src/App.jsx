import React, {useState, useEffect} from 'react';
import tw, {styled} from 'twin.macro';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

//modules
import './App.css';
import RockImg from './pages/RockImg';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Points from './pages/Points';
import { HeaderText, HeaderSubTeext } from './components/Text';
import Projects from './pages/Projects';

const Header = styled.div`
  ${tw`z-50	table flex w-full hidden  md:flex lg:flex`}
  padding : 0% 10%;
  position : fixed;
  background-color : ${({scroll})=>scroll > 100 && "white"};
  color : ${({scroll})=>scroll < 100 && "rgb(148 163 184)"};
`

const HeadBtn = styled.div`
  ${tw` m-3`}
`

const ScrollView = styled.div`
  overscroll-y-auto
`

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  //! header 변경 useEffect
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <ScrollView>
        <Header className="" scroll={scrollPosition}>
          <HeadBtn css={{marginRight : "5%"}}>
            <Link activeClass="active"  to="hi" spy={true} smooth={true} duration={500} ><HeaderText>RockGyu</HeaderText></Link>
          </HeadBtn>
          <HeadBtn>
            <Link activeClass="active"  to="aboutme" spy={true} smooth={true} duration={500} ><HeaderSubTeext>Hi</HeaderSubTeext></Link>
          </HeadBtn>
          <HeadBtn>
            <Link activeClass="active"  to="points" spy={true} smooth={true} duration={500}><HeaderSubTeext>Points</HeaderSubTeext></Link>
          </HeadBtn>
          <HeadBtn>
            <Link activeClass="active"  to="skills" spy={true} smooth={true} duration={500} ><HeaderSubTeext>Skills</HeaderSubTeext></Link>
          </HeadBtn>
          <HeadBtn>
            <Link activeClass="active"  to="projects" spy={true} smooth={true} duration={500} ><HeaderSubTeext>Projects</HeaderSubTeext></Link>
          </HeadBtn>
        </Header>
        <Element name="hi">
          <RockImg />
        </Element>
        <Element name="aboutme">
          <AboutMe />
        </Element>
        <Element name="points">
          <Points />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <div style={{height : "1000px", backgroundColor : "blue"}}/>
    </ScrollView>
  );
}

export default App;
