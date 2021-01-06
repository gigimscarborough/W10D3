import * as Minesweeper from '../minesweeper.js';
import React from 'react';
import Board from './board';

class Game extends React.Component{
    constructor(props) {
        super(props);
        const newBoard = new Minesweeper.Board(9,9); // may cause issue later
        this.state = { board: new Minesweeper.Board(9, 9)};
        this.updateGame = this.updateGame.bind(this);

    }

    updateGame() {
        
    }

    render() {
        return (
            <div>
                <h1>hi</h1>
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }

}

export default Game;