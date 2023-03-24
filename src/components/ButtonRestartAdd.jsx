import '../stylesheets/ButtonRestartAdd.css'
import { useContext } from 'react';
import { UsersContext, DisplayContext } from '../context/ContextProvider';

function ButtonRestartAdd(){

    const {setUsers} = useContext(UsersContext);
    const {setScreenView} = useContext(DisplayContext);

    const add = ()=>{
        setScreenView('add');
    }
    
    const restart = ()=>{
        setScreenView('add');
        setUsers([]);
    }
    return(
        <div className="containerButtons">
            <button 
                onClick = {restart}
                className='restart'>
                    REINICIAR
            </button>
            <button 
                onClick= {add}
                className='add'>
                    AGREGAR
            </button>
        </div>
    )
};

export default ButtonRestartAdd;