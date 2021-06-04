import "./card.css";

export default function CardText(props) {
  return (
    <div className="card-text">
      <p id={props.href} onClick={props.click}>
        {props.content}
      </p>
    </div>
  );
}
