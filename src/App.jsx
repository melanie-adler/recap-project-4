import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  function handleNewColor(newColor) {
    const colorWithId = { id: uid(), ...newColor };
    setColors([colorWithId, ...colors]);
  }

  function handleDeleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  function handleEditColor(updatedColor) {
    setColors(
      colors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleNewColor} />
      {colors.length > 0 ? (
        <ul>
          {colors.map((color) => {
            return (
              <li key={color.id} className="color-list">
                <Color
                  color={color}
                  onDeleteColor={handleDeleteColor}
                  onEditColor={handleEditColor}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Add a new Color!</p>
      )}
    </>
  );
}

export default App;
