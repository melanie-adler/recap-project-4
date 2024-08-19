import DeleteButton from "../DeleteButon/DeleteButton";
import "./Color.css";

export default function Color({ color, id, onDeleteColor }) {
  return (
    <div
      className="color-card"
      style={{ background: color.hex, color: color.contrast }}
    >
      <h2 className="color-card-headline">{color.hex}</h2>
      <p>
        <b>{color.role}</b>
      </p>
      <p>contrast: {color.contrast}</p>
      <DeleteButton id={id} onDeleteColor={onDeleteColor} />
    </div>
  );
}
