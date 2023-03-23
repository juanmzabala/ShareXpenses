import { BiXCircle,BiCheckCircle } from "react-icons/bi";
import '../stylesheets/TagUser.css'
import { useState,useContext } from "react";
import { UsersContext,DisplayContext } from "../context/ContextProvider";

function TagUser(props){
    const {users,setUsers} = useContext(UsersContext);
    const {screenView,setScreenView} = useContext(DisplayContext);

    const [nameUser,setNameUser] = useState(props.name);
    const [expenses,setExpenses] = useState(props.expenses);
    const [classInputText,setClassInputText] = useState('editName');
    const [classInputNumber, setClassInputNumber] = useState('editExpenses');

    const changeName = (e)=>{
        const value = e.target.value;
        if (value.length<12){
            setNameUser(value);
        }

        if (nameUser || value ){
            setClassInputText('inputText');
        } 
    }

    const changeExpenses = (e)=>{
        const value = e.target.value;
        setExpenses(value);
        if (/^[0-9+*.]+$/.test(value)){
            setClassInputNumber('editExpenses')
        }else{
            if(value===''){
                setClassInputNumber('editExpenses')
            }else{
                setClassInputNumber('editExpenses error');
            }
            
        }
    }
    const sendEdit = (id)=>{
        if (nameUser && expenses){
            if (Number(/^[0-9.]+$/.test(expenses))){
                users.forEach((user)=>{
                    if (user.id=== id){
                        user.name=nameUser;
                        user.expenses=Number(expenses);
                        user.edit=false;
                    }
                })
            }
            setUsers(users);
            setScreenView('add');
        } else if(!nameUser && expenses){
            setClassInputText('editName error')
        } else if(nameUser && !expenses){
            setClassInputNumber('editExpenses error');
        }
    }

    if(props.isEdit===true){
        return(
            <div className="containerTag editTag" id={props.id}>
                <div className="text">
                    <input onChange = {changeName}type='text' className={classInputText} value={nameUser}/>
                    <div className="splitter"> | </div>
                    <div className="number">Gastó $
                    <input onChange={changeExpenses} type='text' className={classInputNumber} value={expenses}/></div>
                </div>
                <div onClick={()=>sendEdit(props.id)} className="closeContainer">
                    <BiCheckCircle color='#FFF'size={'1em'}/> </div>
            </div>
        )
    }else{
        return(
            <div onDoubleClick={()=>props.edit(props.id)} className="containerTag" id={props.id}>
                <div className="text">
                    <div className="name">{props.name}</div>
                    <div className="splitter"> | </div>
                    <div className="number">Gastó ${props.expenses}</div>
                </div>
                <div onClick={()=>props.erase(props.id)} className="closeContainer">
                    <BiXCircle color='#D43232'  size={'1em'}/> </div>
            </div>
        )
    }
    
};

export default TagUser;