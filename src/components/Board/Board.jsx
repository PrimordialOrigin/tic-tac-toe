import  {useContext} from 'react'
import './Board.css'
import Square from '../Square/Square'
import { GameContext } from '../../assets/GameContext';

function Board() {

    const {board} = useContext(GameContext);

    return (
    <div className='board'>
        {board.map((value, index) => (
            <Square key={index} index={index}/>
        ))}
    </div>
  )
}

export default Board


