import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleNewColor(newColor) {
    const colorWithId = { id: uid(), ...newColor };
    setColors([colorWithId, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleNewColor} />
      <ul>
        {colors.map((color) => {
          return (
            <li key={color.id} className="color-list">
              <Color color={color} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
