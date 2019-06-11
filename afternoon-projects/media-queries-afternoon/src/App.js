import React from 'react';
import './App.css';
import './reset.css';

import Welcome from './Components/Welcome/Welcome'
import Services from './Components/Services/Services'



function App() {
  return (
    <div className="App">
      <Welcome/>
      <Services/>
    </div>
  );
}

export default App;
