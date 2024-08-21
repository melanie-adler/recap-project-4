import { useEffect, useState } from "react";

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

  return <div>Contrast Score: {result}</div>;
}
