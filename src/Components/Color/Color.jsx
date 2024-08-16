import { initialColors } from "../../lib/colors";
import "./Color.css";

export default function Color() {
  return (
    <>
      <div
        className="color-card"
        style={{ backgroundColor: `${initialColors[0].hex}` }}
      >
        <h2 className="color-card-headline">{initialColors[0].hex}</h2>
        <p>{initialColors[0].role}</p>
        <p>contrast: {initialColors[0].contrastText}</p>
      </div>
    </>
  );
}
