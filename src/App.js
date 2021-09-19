import React, {
  useState,
} from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import SkeletonUI from './shell/SkeletonUI';

function App() {

  return (
    <Router>
      <div className="App">
        <SkeletonUI></SkeletonUI>
      </div>
    </Router>
  );
}

export default App;
