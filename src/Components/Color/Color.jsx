import ContrastScore from "../ContrastScore/ContrastScore";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import DeleteButton from "../DeleteButon/DeleteButton";
import EditButton from "../EditButton/EditButton";
import "./Color.css";

export default function Color({ color, onDeleteColor, onEditColor }) {
  return (
    <div
      className="color-card"
      style={{ background: color.hex, color: color.contrast }}
    >
      <div className="copy-area">
        <h2 className="color-card-headline">{color.hex}</h2>
        <CopyToClipboard hex={color.hex} />
      </div>
      <p>
        <b>{color.role}</b>
      </p>
      <p>contrast: {color.contrast}</p>
      <ContrastScore hex={color.hex} contrast={color.contrast} />
      <div className="options-area">
        <EditButton color={color} onEditColor={onEditColor} />
        <DeleteButton id={color.id} onDeleteColor={onDeleteColor} />
      </div>
    </div>
  );
}
