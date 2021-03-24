import React from 'react';
import './App.css'

function App() {

  var rows = [];
  for (var i = 0; i < 26; i++) {
      rows.push(<div className="card" id={i}>
                  <div className="card-number">1</div>
                  <div className="card-type"><i className="fas fa-heart"></i></div>
                </div>);
  }
  

  return (
    <div className="container">
      <div className="score-card">
        <h3>Score : <span id="score">0</span></h3>
      </div>
      <div className="grid">
       {rows.map((item) => item)}
      </div>
    </div>
  )
}

export default App;
