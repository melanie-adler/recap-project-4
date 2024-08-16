import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm />
      <ul>
        {initialColors.map((color) => {
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
