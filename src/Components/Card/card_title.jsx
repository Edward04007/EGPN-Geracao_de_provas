import './card.css'

export default function CartTitle(props){

    return(
        <div className="card-title">
            <span>{props.title}</span>
        </div>
    )
}