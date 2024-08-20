import { useEffect, useState } from "react";

export default function ColorInput({ id, value, defaultValue, onChange }) {
  const [InputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  function handleChange(event) {
    setInputValue(event.target.value);
    onChange(event);
  }

  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={InputValue}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
      <input
        type="color"
        id={id}
        name={id}
        value={InputValue}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </>
  );
}
