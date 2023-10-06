import React from 'react';
import './homepage.css';

import Ticker from './Ticker';
import Solutions from './Solutions';
import BusinessSolutions from './BusinessSolutions';
import EliteBanking from './EliteBanking';
import LoanCalculator from './LoanCalculator';
import Tools from './Tools';
import Apps from './Apps';

function Homepage() {
  return (
    <>
     
      <Ticker />
      <Solutions />
      <BusinessSolutions />
      <EliteBanking />
      <LoanCalculator />
      <Tools />
      <Apps />
    </>
  );
}

export default Homepage;
