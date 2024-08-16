import "./ColorForm.css";

export default function ColorForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  }

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="role">Role</label>
        <input type="text" name="role" id="role"></input>
        <label htmlFor="hex">Hex</label>
        <input type="text" name="hex" id="hex"></input>
        <input type="color" name="hex-color" id="hex-color"></input>
        <label htmlFor="contrast">Contrast Text</label>
        <input type="text" name="contrast" id="contrast"></input>
        <input type="color" name="contrast-color" id="contrast-color"></input>
        <button type="submit">Add Color</button>
      </form>
    </>
  );
}
