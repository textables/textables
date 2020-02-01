import React from 'react';
import PropTypes from 'prop-types';

const HUD = ({ score }) => (
  <section>
    <h3>Streak</h3>
    <p>{score}</p>
  </section>
);

HUD.propTypes = {
  score: PropTypes.number.isRequired
};

export default HUD;
