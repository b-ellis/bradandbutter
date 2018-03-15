import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Logo from '../../images/Brad_and_Butter_Logo.svg';

const HeaderWrapper = styled.div`
    background: #fedc0d;
    box-shadow: 0 2px 13px 2px #d85a00;
    position: fixed;
    width: 100%
      img {
        height: 60px;
        margin: 0;

        @media (max-width: 610px){
          height: 45px;
        }
      }
`;

const HeaderContainer = styled.div`
    margin: 0 auto;
    padding: .45rem 1.0875rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    nav {
      display: flex;
      ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        margin: 0;
        align-items: center;

        li{
          padding: 0 25px;
          font-size: 1.5rem;
          margin: 0;

          a{
            text-decoration: none;
            position: relative;
            color: #d85a00;
            text-shadow: 1px 1px #00000050;
          }

          a:hover {
            color: #61b5e2;
          }

          a:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #61b5e2;
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
          }

          a:hover:before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
          }
        }
      }
            
      @media (max-width: 610px){
        width: 100%;
        justify-content: space-around;
        margin: 10px;

        ul{
          li{
            font-size: 1.25rem;
          }
        }
      }

      @media (max-width: 375px){
        ul{
          li{
            font-size: 1rem;
          }
        }
      }
    }
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <Link to='/'>
        <img src={Logo} />
      </Link>
      <nav>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
      </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
