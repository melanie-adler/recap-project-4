import { useEffect, useState } from "react";
import "../ContrastScore/ContrastScore.css";

export default function ContrastScore({ hex, contrast }) {
  const [result, setResult] = useState("");

  useEffect(() => {
    async function postFetch() {
      fetch("https://www.aremycolorsaccessible.com/api/are-they", {
        method: "POST",
        body: JSON.stringify({ colors: [hex, contrast] }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setResult(json.overall);
        });
    }
    postFetch();
  });

  console.log(result);

  if (result === "Yup") {
    return <div className="contrast-score-good">Contrast Score: {result}</div>;
  } else if (result === "Kinda") {
    return (
      <div className="contrast-score-medium">Contrast Score: {result}</div>
    );
  } else {
    return <div className="contrast-score-bad">Contrast Score: {result}</div>;
  }
}
