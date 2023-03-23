import '../stylesheets/FormAdd.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
function FormAdd(props){
    const [nameUser,setNameUser] = useState('');
    const [expenses,setExpenses] = useState('');
    const [classInputText,setClassInputText] = useState('inputText');
    const [classInputNumber, setClassInputNumber] = useState('inputNumber');

    const changeName = (e)=>{
        const value = e.target.value;
        if (value.length<12){
            setNameUser(value);
        }

        if (nameUser || value ){
            setClassInputText('inputText');
        }
        value.length

        
    }

    const changeExpenses = (e)=>{
        const value = e.target.value;
        setExpenses(value);
        if (/^[0-9+*.]+$/.test(value)){
            setClassInputNumber('inputNumber')
        }else{
            if(value===''){
                setClassInputNumber('inputNumber')
            }else{
                setClassInputNumber('inputNumber error');
            }
            
        }
    }

    const submitForm = (e)=>{
        e.preventDefault();
        if (nameUser && expenses){
            let expensesAdd = evaluate(expenses)
            if (!isNaN(evaluate(expenses))){
                let expensesAdd = evaluate(expenses)
                props.function(nameUser,expensesAdd);
                setExpenses('');
                setNameUser('');
                setClassInputNumber('inputNumber')
            }
            
        } else if(!nameUser && expenses){
            setClassInputText('inputText error')
        } else if(nameUser && !expenses){
            props.function(nameUser,0);
                setExpenses('');
                setNameUser('');
                setClassInputNumber('inputNumber')
        }
    }
    if(props.edit==true){
        return(
            <div className='containerForm'>
            <div className="blockGrey edit">
                <form onSubmit={submitForm} >
                    <input disabled onChange={changeName} className='inputText edit' placeholder='Agrega el nombre' type='text' value={nameUser}/>
                    <input disabled onChange={changeExpenses} className='inputNumber edit' placeholder='¿Cuánto gastaste?' type='text' value={expenses}/>
                    <button disabled className='submit edit'>AGREGAR</button>
                </form>
            </div>
        </div>
        )
    }
    return(
        <div className='containerForm'>
            <div className="blockGrey">
                <form onSubmit={submitForm}>
                    <input onChange={changeName} className={classInputText} placeholder='Agrega el nombre' type='text' value={nameUser}/>
                    <input onChange={changeExpenses} className={classInputNumber} placeholder='¿Cuánto gastaste?' type='text' value={expenses}/>
                    <button className='submit'>AGREGAR</button>
                </form>
            </div>
        </div>
    )
};

export default FormAdd;