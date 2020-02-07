import React, { Component } from 'react';
import Quote from '../components/Quote';
import HUD from '../components/HUD';

export default class Game extends Component {
  state = {
    quote: {
      text: 'This is a quote',
      source: '?????'
    },
    hasGuessed: false,
    score: 7
  }

  //handleGuess
  //handleLoadNext

  render() {
    const { quote, score } = this.state;
    return (
      <>
        <Quote quote={quote}/>
        <HUD score={score}/>
      </>
    );
  }
}