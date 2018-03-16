import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faCss3, 
  faGit, 
  faGithub,
  faHtml5, 
  faJsSquare, 
  faLess, 
  faSass,
  faNodeJs,
  faNpm,
  faReact
  } from '@fortawesome/fontawesome-free-brands'

export default class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <h1>About Me</h1>
        <AboutInfo>
          <h2>Hey I'm Brad Ellis,</h2>
          <h2>I am a Web Developer who is seeking an opportunity to work with a group of talented developers.
          After graduating from West Virginia University in 2015 with a B.A. in Psychology I started to get into Web Development.
          I attended <a href='https://www.thinkful.com/'>Thinkful</a> where I gained a solid foundation for Fullstack Web Development, building applications in the MERN stack.
          I enjoy to continuously learn new technologies and libraries for my arsenal of tools. 
          </h2>
          <h2>I also enjoy playing music, I have been playing guitar and drums for the majority of my life and love playing with other musicians.
          A dream of mine is to have my own workshop where I build hand-crafted guitars and other stringed instruments.
          </h2>
          <h2>If you would like to talk more feel free to <Link to='/contact'>contact</Link> me, I'd love to get to know you.</h2>
        </AboutInfo>
        <div className='screen'>
          <div className='screen-header'>
            <div className='circles-div'>
              <div className='red-circle'></div>
              <div className='yellow-circle'></div>
              <div className='green-circle'></div>
            </div>
            <div className='url-div'>
              <div className='url-input'>
                <p className='url-link'>{this.props.urlLink}</p>
              </div>
            </div>
          </div>
          <ScreenWrapper>
            <h2>Skills</h2>
            <h4>I am a web developer, who is skilled in writing clean, testable frontend/ backend code. Experienced with React/Redux, jQuery, Node, vanilla JavaScript, and mobile-first responsive development with HTML5 and CSS3. Well versed with modern tooling and eager to learn new tools, languages, and libraries for the job.</h4>
            <h2>Tools</h2>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">
                  <FontAwesomeIcon className='html-icon' icon={faHtml5} size='2x'/>
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank">
                  <FontAwesomeIcon className='css-icon' icon={faCss3} size='2x'/>
                </a>
              </li>
              <li>
                <a href="https://www.javascript.com/" target="_blank">
                  <FontAwesomeIcon className='js-icon' icon={faJsSquare} size='2x'/>
                </a>
              </li>
              <li>
                <a href="https://nodejs.org/en/" target="_blank">
                  <FontAwesomeIcon className='node-icon' icon={faNodeJs} size='2x'/>
                </a>
              </li>
              <li>
                <a href="https://reactjs.org/" target="_blank">
                  <FontAwesomeIcon className='react-icon' icon={faReact} size='2x'/>
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/" target="_blank">
                  <FontAwesomeIcon className='npm-icon' icon={faNpm} size='2x'/>
                </a>
              </li>
              <li>
                <a href="http://lesscss.org/" target="_blank">
                  <FontAwesomeIcon className='less-icon' icon={faLess} size='2x'/>
                </a>
              </li>
              <li>
                <a href="https://sass-lang.com/" target="_blank">
                  <FontAwesomeIcon className='sass-icon' icon={faSass} size='2x'/>
                </a>
              </li>
              <li>
                <a href="https://git-scm.com/" target="_blank">
                  <FontAwesomeIcon className='git-icon' icon={faGit} size='2x'/>
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank">
                  <FontAwesomeIcon className='github-icon' icon={faGithub} size='2x'/>
                </a>
              </li>
            </ul>
          </ScreenWrapper>
        </div>
      </AboutWrapper>
    )
  }
}

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  

  h1{
    font-family: Bangers;
    margin: 1.5em;
    letter-spacing: 1rem;
    font-size: 75px;
    color: #d85802;
    text-shadow: 1px 1px #0A1C20;
  }

  @media (max-width: 375px){
    h1{
      font-size: 50px;
      margin: 1.5em 0;
    }
  }
`

const AboutInfo = styled.div`
max-width: 750px;
h2{
  font-family: Oswald;
  color: #0A1C20
  a{
    color: #d85902;
    text-shadow: 2px 2px #0A1C20;
  }
}
`

const ScreenWrapper = styled.div`
  height: 500px;
  overflow: scroll;
  background-color: #E9E9E1;
  padding: 1em;
  border-radius: 5px;

  h2, h3 {
    font-family: Bangers;
    text-align: center;
    margin: 20px;
    color: #d85902;
    text-shadow: 1px 1px #0A1C20;
    letter-spacing: 2px;
  }

  h4{
    font-family: Oswald;
    text-align: center;
    margin: 20px;
    color: #0A1C20
  }

  p {
    margin: auto;
    text-align: -webkit-center;
    font-family: Oswald;
    font-weight: lighter;
    color: #0A1C20
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 2em;
    flex-wrap: wrap;

    li {
      font-family: Oswald;
      color: #0A1C20;
      margin: 5px;

      a{
        text-decoration: none;
        color: #0A1C20;
      }
    }
  }
`
