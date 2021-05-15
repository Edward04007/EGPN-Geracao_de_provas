import './header.css'

export default function Header(props){

    return(
        <header className="header">
           <span>{props.title}</span>
        </header>
    )
}