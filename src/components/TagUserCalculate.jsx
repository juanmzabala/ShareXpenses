
import '../stylesheets/TagUserCalculate.css'
function TagUserCalculate(props){

    const expense = (props.xperson - props.expenses).toFixed(2);
    let expenseSituation;
    let classSituation;
    if(expense>0){
        expenseSituation=`Debe $${expense}`;
        classSituation='containerTagCalculate must';
    }else if(expense<0){
        expenseSituation=`Recibe $${Math.abs(expense)}`;
        classSituation='containerTagCalculate receive';
    }else{
        expenseSituation=`Sin deuda`;
        classSituation='containerTagCalculate mustFree';
    }


    return(
        <div className={classSituation} id={props.id}>
                <div className="name">{props.name}</div>
                <div className="splitter"> | </div>
                <div className="number">{expenseSituation}</div>
        </div>
    )
};

export default TagUserCalculate;