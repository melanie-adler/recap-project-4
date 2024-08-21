import { useEffect, useState } from "react";
import "./CopyToClipboard.css";

export default function CopyToClipboard({ hex }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    setIsCopied(true);

    try {
      await navigator.clipboard.writeText(hex);
    } catch (error) {
      console.error("Copy failed: ", error);
    }
  }

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  return (
    <div>
      {isCopied ? (
        <span>Copied!</span>
      ) : (
        <button className="color-card-copy" onClick={handleCopy}>
          Copy
        </button>
      )}
    </div>
  );
}
