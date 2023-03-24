import '../stylesheets/ButtonCalculate.css';


function ButtonCalculate(props){

    return(
        <div className="buttonContainer">
            <button 
                className="calculate" 
                onClick={()=>props.show()}>CALCULAR</button>
        </div>
    )
}

export default ButtonCalculate;