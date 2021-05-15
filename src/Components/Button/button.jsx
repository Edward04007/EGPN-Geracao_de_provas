import './button.css'

export default function Button(props){

    if(props.op === 1){
        return(
            <div className="div-buttons">
                <p onClick={props.click2}>Voltar</p>
            </div>
        )
    }else{
        return(
            <div className="div-buttons">
                <p onClick={props.click2}>Voltar</p>
                <p onClick={props.click1}>Próximo</p>
             </div>
        )
    }
}