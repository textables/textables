import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Game from '../containers/Game';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Game />
      <Footer />
    </React.Fragment>);
}
