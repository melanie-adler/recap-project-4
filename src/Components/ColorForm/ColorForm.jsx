import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({
  onSubmitColor,
  initialData = {
    role: "highlight light",
    hex: "#AE737F",
    contrast: "#000000",
  },
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmitColor(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="role">Role</label>
        <br />
        <input
          type="text"
          name="role"
          id="role"
          defaultValue={initialData.role}
        ></input>
        <br />
        <label htmlFor="hex">Hex</label>
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
        <br />
        <label htmlFor="contrast">Contrast Text</label>
        <br />
        <ColorInput id="contrast" defaultValue={initialData.contrast} />
        <br />
        <button type="submit">Add Color</button>
      </form>
    </>
  );
}
