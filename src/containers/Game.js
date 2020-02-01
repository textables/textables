import React, { Component } from 'react';
import Quote from '../components/Quote';

export default class Game extends Component {
  state = {
    quote: {
      text: 'This is a quote',
      source: '?????'
    },
    hasGuessed: false,
  }

  //handleGuess
  //handleLoadNext

  render() {
    const { quote } = this.state;
    return (
      <>
        <Quote quote={quote}/>
      </>
    );
  }
}