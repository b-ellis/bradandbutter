import React, { Component } from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';

class IndexPage extends Component{

  constructor(){
    super();
    this.state = {
      me: ['Web Developer', 'Mountaineer', 'Musician', 'Luthier', 'Beer Drinker'],
      display: 'Web Developer',
      index: 1
    }
    this.setTime = this.setTime.bind(this);
  }

  componentDidMount(){
    this.interval = setInterval(this.setTime, 5000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  setTime = () => {
    if(this.state.index > 4){
      this.setState({
        index: 0
      })
    } 
    this.setState({
      index: this.state.index + 1,
      display: this.state.me[this.state.index]
    });
  }

  render(){
    return(
      <HomeWrapper ref='myRef'>
        <MeWrapper>
          <h1>I am Brad Ellis</h1>
        </MeWrapper>
        <DescriptionWrapper>
          <h1 className='adjectives'>{this.state.display}</h1>
        </DescriptionWrapper>
      </HomeWrapper>
    )
  }
}

const HomeWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 85vh;
`;

const MeWrapper = styled.div`
  align-self: center;
  padding-left: 6em;

  h1{
    font-family: Bangers;
    letter-spacing: 4px;
    font-size: 80px;
    color: #d85902;
    text-shadow: 2px 2px #0A1C20;

    @media (max-width: 515px){
      font-size: 65px;
    }

    @media (max-width: 430px){
      font-size: 50px;
    }
  }
  
  @media (max-width: 700px){
    justify-self: center;
    padding: 0;
  }
`;

const DescriptionWrapper = styled.div`
  align-self: center;
  justify-self: flex-end;
  padding-right: 6em;

  h1{
    font-family: Bangers;
    letter-spacing: 4px;
    font-size: 80px;
    color: #d85902;
    text-shadow: 2px 2px #0A1C20;

    @media (max-width: 515px){
      font-size: 65px;
    }

    @media (max-width: 430px){
      font-size: 50px;
    }
  }

  @media (max-width: 700px){
    justify-self: center;
    padding: 0;
  }
`;

export default IndexPage
