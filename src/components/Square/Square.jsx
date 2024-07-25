import {useContext} from "react";
import './Square.css'
import { GameContext } from "../../assets/GameContext";


function Square({index}) {
    const {value, setValue, board, setBoard, winner} = useContext(GameContext);

    const squareClick = () => {
        if (!board[index] && !winner) {
            const newBoard = [...board];
            newBoard[index] = value;
            setBoard(newBoard);
            setValue(value === "X" ? "O" : "X");
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
