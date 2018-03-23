import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/fontawesome-free-brands';

import Header from '../components/Header'
import Logo from '../images/Brad_and_Butter_Logo.svg';
import './index.css';


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Brad and Butter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      links={[{
        rel:'stylesheet',
        href: "https://fonts.googleapis.com/css?family=Bangers"
      }]}/>
    <Header />
    <ChildrenWrapper>
      {children()}
    </ChildrenWrapper>
    <FooterWrapper>
      <h4>Find Me At:</h4>
      <ul>
        <li>
          <a href='https://github.com/b-ellis' target="_blank">
            <FontAwesomeIcon className='github' icon={faGithub} size='2x' color='#fedd0f' />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/bradley-ellis-33a961113/' target="_blank">
            <FontAwesomeIcon className='linkedin' icon={faLinkedin} size='2x' color='#fedd0f'/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100007280025980" target="_blank">
            <FontAwesomeIcon className='facebook' icon={faFacebook} size='2x' color='#fedd0f' />
          </a>
        </li>
      </ul>
    </FooterWrapper>
  </div>
)

const ChildrenWrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 85px;
  background-color: #61b5e2;
  overflow: scroll;
`;

const FooterWrapper = styled.div`
  background-color: #fedc0d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  h4{
    margin: 10px;
    font-family: Bangers;
    letter-spacing: 5px;
    color: #0A1C20;
  }

  ul{
    display: flex;
    justify-content: center;
    list-style: none;
    width: 100%;
    align-items: center;
    margin: 0;

    li{
      padding: 0 15px;
      margin-bottom: 0;
    }
  }
`;

export default TemplateWrapper;
