import '../stylesheets/CanvaBase.css'
import { useContext } from 'react';
import { UsersContext , DisplayContext } from '../context/ContextProvider';
import DisplayTotal from './DisplayTotal';
import TagUserCalculate from './TagUserCalculate';
import ButtonRestartAdd from './ButtonRestartAdd';


function ShowView(){
    const {users,setUsers} = useContext(UsersContext);
    let total = 0;
    const sum = users.forEach((user)=>{
        total = total + user.expenses;
    })
    console.log(total);
    console.log(users.length);
    const expensesXPerson = Number(total/(users.length)).toFixed(2)


    return(
        <div className='container'>
            <h1 className='title'>$hareXpenses</h1>
            <DisplayTotal total={total} divide={users.length} xperson={expensesXPerson}/>
            {users.map(user=>
                <TagUserCalculate
                name={user.name}
                expenses={user.expenses}
                key={user.id}
                id={user.id}
                xperson={expensesXPerson}/>
            )}
            <ButtonRestartAdd />
        </div>
        

    )
}

export default ShowView;

