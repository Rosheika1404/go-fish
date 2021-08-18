
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
         <button className="new-game input wave waveA">New Game</button>
    <div className="comp-cards">
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
    </div>
    <div className="deck-cards">
        <h3 className="comp-message">Go Fish!</h3>
        <div className="score-deck-container">
            <h3 className="user-score-display">You: 0</h3>
            <img src="src/images/card-deck.png" alt="" width="155px" height="150px" className="card-deck" />
            <h3 className="comp-score-display">Computer: 0</h3>
        </div>
        <h3 className="deck-remaining">Number of cards remaining: 52</h3>
        <h5 className="sets-found">Sets Found: </h5>
    </div>
    <div className="choice-button-container toggle-content">
        <h4>Do you have any?</h4>
        <div className="choice-buttons">
            <button className="choice wave2 waveA2" id="2s">2s</button>
            <button className="choice wave2 waveA2" id="3s">3s</button>
            <button className="choice wave2 waveA2" id="4s">4s</button>
            <button className="choice wave2 waveA2" id="5s">5s</button>
            <button className="choice wave2 waveA2" id="6s">6s</button>
            <button className="choice wave2 waveA2" id="7s">7s</button>
            <button className="choice wave2 waveA2" id="8s">8s</button>
            <button className="choice wave2 waveA2" id="9s">9s</button>
            <button className="choice wave2 waveA2" id="10s">10s</button>
            <button className="choice wave2 waveA2" id="jacks">Jacks</button>
            <button className="choice wave2 waveA2" id="queens">Queens</button>
            <button className="choice wave2 waveA2" id="kings">Kings</button>
            <button className="choice wave2 waveA2" id="aces">Aces</button>
        </div>
    </div>
    <div className="user-response toggle-content">
        <button className="choice wave2 waveA2" id="yes">Yes</button>
        <button className="choice wave2 waveA2" id="no">No, Go Fish!</button>
    </div>
    <div className="player-cards">
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
        <img src="src/images/back.png" alt="" className="card" width="100px" height="150px" />
    </div>

    <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
    </div>
    </div>
  );
}

export default App;
