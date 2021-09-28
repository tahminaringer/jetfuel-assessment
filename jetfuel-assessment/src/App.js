import React from 'react';
import './App.css';
import Forecast from './components/Forecast/Forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jetfuel Assessment</h1>
      </header>
      <main>
        {/* add weather fetching component */}
        <Forecast />
      </main>
      <footer>
        Page created by Tahmina Ringer
      </footer>
    </div>
  );
}

export default App;