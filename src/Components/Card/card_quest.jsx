import "./card.css";

export default function CardQuest(props) {
  return (
    <div className="cardQuest">
      <main>{props.q}</main>
      <p onClick={props.click3}>{props.a}</p>
      <p onClick={props.click3}>{props.b}</p>
      <p onClick={props.click3}>{props.c}</p>
      <p onClick={props.click3}>{props.d}</p>
      <p onClick={props.click3}>{props.e}</p>
    </div>
  );
}
