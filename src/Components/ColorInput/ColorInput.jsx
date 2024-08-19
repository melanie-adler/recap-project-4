import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [InputValue, setInputValue] = useState(defaultValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={InputValue}
        onChange={handleInputValue}
      />
      <input type="color" value={InputValue} onChange={handleInputValue} />
    </>
  );
}
