import React from 'react';
import './App.css';
import MultipleRandomUsers from './components/elements/MultipleRandomUsers'

function App() {
  return (
    <div className="App">
		<MultipleRandomUsers count={5} />
    </div>
  );
}

export default App;
