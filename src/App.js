import React, {Component} from 'react';
import PlayerCard from './PlayerCard'


class Game extends Component {
constructor(){
  super();
  this.signs = ["rock","scissors","paper"];
  this.state = {
    playerOne: "rock",
    playerTwo: "scissors",
  }
}

//methods live here
playGame = () =>{
 this.setState({
   playerOne:this.signs[Math.floor(Math.random()*3)],
   playerTwo:this.signs[Math.floor(Math.random()*3)],
 })

}

decideWinner = () =>{
  const playerOne= this.state.playerOne
  const playerTwo= this.state.playerTwo

  if(playerOne===playerTwo)
  {
    return "It's a tie!"
  } else if
  ((playerOne==="rock"&&playerTwo==="scissors"||playerOne==="paper"&&playerTwo==="rock"||playerOne==="scissors"&&playerTwo==="paper")) {
    return "Player One wins!"
  } else {
      return "Player Two wins!"
    }
}










  render(){
    return (
      <div className="container">
          <div>
            <PlayerCard sign={this.state.playerOne}/>
            <PlayerCard sign={this.state.playerTwo}/>
          </div>
          <div className="winner">{this.decideWinner()}</div>
          <button type="button" onClick ={this.playGame}>Play Game</button>
      </div>
    )
  }
}

export default Game;
