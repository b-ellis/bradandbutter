import React, { Component } from 'react';
import styled from 'styled-components';

export default class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <h1>Contact</h1>
        <ContactInfo>
          <h2>Feel free to contact me by email</h2>
          <h2><a href='mailto:bradjellis18@gmail.com'>bradjellis18@gmail.com</a></h2>
          <h2>or through social media from the links below, I'd love to talk</h2>
        </ContactInfo>
      </ContactWrapper>
    )
  }
}

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  max-width: 650px;
  height: 71vh;

  h1{
    font-family: Bangers;
    letter-spacing: 1rem;
    font-size: 80px;
    color: #d85902;
    text-shadow: 2px 2px #0A1C20;
  }

  @media (max-width: 375px){
    h1{
      font-size: 50px;
      margin: 1.5em 0;
    }
  }
`

const ContactInfo = styled.div`
h2{
  font-family: Oswald;
  a{
    color: #d85902;
    text-shadow: 2px 2px #0A1C20;
  }
}
`
