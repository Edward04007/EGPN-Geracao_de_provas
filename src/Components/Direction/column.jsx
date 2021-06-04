import "./direction.css";

export default function Column(props) {
  if (props.column === 1) {
    return <div className="column">{props.children}</div>;
  } else {
    return <div className="column padding">{props.children}</div>;
  }
}
