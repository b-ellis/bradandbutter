import React, { Component } from 'react';
import styled from 'styled-components';

import Screen from '../components/Screen';

export default class Projects extends Component {
  render() {
    return (
      <ProjectWrapper>
        <h1>Projects</h1>
        <Screen 
        title='Grateful Cooking'
        about='A personal project built while learning Meteor. The app allows users to build their own personal cookbook. Once a user has added a reacipe they can add it or remove it from a menu for their meals for the week. If a recipe is in the menu they will have a personal shopping list of all the ingredients they need.'
        urlLink='https://grateful-cooking.herokuapp.com/'
        gitLink='https://github.com/b-ellis/Cook'
        tech={['React', 'Meteor', 'MongoDB', 'Node']}/>
        <Screen 
        title='Tabs'
        about='This project was built for Thinkful after learning about server-side development in Node.js. This application contacts the songsterr API gathering guitar tabs of a searched artist. The user then is able to save tabs into a database and view all tabs that were saved.'
        urlLink='https://salty-hollows-61107.herokuapp.com/'
        gitLink='https://github.com/b-ellis/node-capstone'
        tech={['Express', 'MongoDB', 'JavaScript','HTML','CSS']}/>
        <Screen 
        title='Jam Loaction'
        about='A completely Frontend project built using knowledge gained through Thinkful. The app allows users to search for concerts by area code and places a pin on a map of where the concerts are located. This projects contacts the JamBase API and the Google Maps API for its data.'
        urlLink='http://jam-loaction.com/'
        gitLink='https://github.com/b-ellis/Jam-Location'
        tech={['JavaScript', 'HTML', 'CSS']}/>
      </ProjectWrapper>
    )
  }
}

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll

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

