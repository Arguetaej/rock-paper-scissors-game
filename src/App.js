import React, {Component} from 'react';
import PlayerCard from './PlayerCard'// ./is for when files are in the same directory
//if a file is in a different folder then...to be typed in later


class Game extends Component {
constructor(){
  super();
  this.signs = ["rock", "paper", "scissors"];//'this' keyword refers to an object to be executed upon
  this.state = {
    playerOne: "rock",
    playertwo: "scissors",
  }
}


  render(){
    return (
      <div className="container">
          <div>
            <PlayerCard sign={this.state.playerOne}/>
            <PlayerCard sign={this.state.playerTwo}/>
          </div>
          <div className="winner">Here is the winner</div>
          <button type="button">Play Game</button>
      </div>
    )
  }
}

export default Game;
