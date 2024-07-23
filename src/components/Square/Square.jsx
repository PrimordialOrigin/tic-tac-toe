import React, {useContext} from "react";
import { GameContext } from "../../assets/GameContext";


function Square({index}) {
    const {value, setValue, board, setBoard} = useContext(GameContext);

    const squareClick = () => {
        if (!board[index]) {
            const newBoard = [...board];
            newBoard[index] = value;
            setBoard(newBoard);
            setValue(value === "X" ? "X" : "O");
        }
    };

    const style = board[index] === "X" ? "X" : "O";
    return (
        <div>
            <button 
            className={`Square ${style}`}
            onClick={squareClick}>
            {board[index]}
            </button>
        </div>
    )
}
export default Square;
