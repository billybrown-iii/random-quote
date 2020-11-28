import React, { Component } from 'react';
import QuoteContainer from './QuoteContainer';
import Button from '@material-ui/core/Button';

function App() {
  return (<div id="conty">
    <QuoteContainer />
    <div id="credit-div">
      <div id="credit-text">
        Quote Machine FCC Project <br></br> by Billy Brown
      </div>
    </div>
  </div>
  )
  
}

export default App;
