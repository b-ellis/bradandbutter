import React, { Component } from 'react';
import styled from 'styled-components';

export default class Screen extends Component {
  render() {
    return (
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
                <h2>{this.props.title}</h2>
                <p>{this.props.about}</p>
                <h3>Technologies</h3>
                <ul>
                    {this.props.tech.map((tech, index) => <li key={index}>{tech}</li>)}
                </ul>
                <h3>Links</h3>
                <ul>
                    <li><a href={this.props.gitLink} target="_blank">Code</a></li>
                    <li><a href={this.props.urlLink} target="_blank">Site</a></li>
                </ul>
            </ScreenWrapper>
        </div>
    )
  }
}

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

    li {
      font-family: Oswald;
      color: #0A1C20;

      a{
        text-decoration: none;
        color: #0A1C20;
      }
    }
  }
`
