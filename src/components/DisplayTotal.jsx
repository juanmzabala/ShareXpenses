import '../stylesheets/DisplayTotal.css';

function DisplayTotal(props){
    return(
        <div className='containerTotal'>
            <div className="blockGrey">
                <div className="tagTotal">Gasto total ${props.total}</div>
                <div className="totalNumber">c/u ${props.xperson}</div>
                <div className="dividePeople">
                    <p>dividido entre 
                        <strong> {props.divide} personas</strong>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default DisplayTotal;