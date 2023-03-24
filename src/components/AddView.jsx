import { useContext } from 'react';
import { UsersContext,DisplayContext } from '../context/ContextProvider';
import '../stylesheets/CanvaBase.css'
import FormAdd from './FormAdd';
import TagUser from './TagUser';
import ButtonCalculate from './ButtonCalculate';
import uniqid from 'uniqid';



function AddView(){

    const {users,setUsers} = useContext(UsersContext);
    const {setScreenView} = useContext(DisplayContext);

    const addUser = (user,expenses)=>{
        const refreshUsers = [{name:user,
                        expenses:expenses,
                        id:uniqid()},...users];

        setUsers(refreshUsers);
    };

    const eraseUser = (id)=>{
        const newUsers = users.filter(user=>(user.id !=id))
        setUsers(newUsers);
    }

    const swichToDisplayShow = ()=>{
        setScreenView('show');
    }

    const editTag = (id)=>{
        setScreenView('edit');
        users.forEach((user)=>{
            if (user.id === id){
                user.edit=true;
            }else{
                user.edit=false;
            }
        })
        setUsers(users);
    }

    if (users.length===0){
        return(
            <div className='container'>
                <h1 className='title'>$hareXpenses</h1>
                <FormAdd function={addUser} /> 
            </div>
        )
    }else if(users.length===1){
        return(
            <div className='container'>
            <h1 className='title'>$hareXpenses</h1>
            <FormAdd function={addUser} />
                {users.map(user=>
                    <TagUser 
                        name={user.name}
                        expenses={user.expenses}
                        key={user.id}
                        id={user.id}
                        erase={eraseUser}
                        edit={editTag}/>
                )}
            </div>
        )
    }else{
        return(
            <div className='container'>
            <h1 className='title'>$hareXpenses</h1>
            <FormAdd function={addUser} />
                {users.map(user=>
                    <TagUser 
                        name={user.name}
                        expenses={user.expenses}
                        key={user.id}
                        id={user.id}
                        erase={eraseUser}
                        edit={editTag}/>
                        
                )}
            <ButtonCalculate show = {swichToDisplayShow}/>
            </div>
    )
    }
   
}

export default AddView;