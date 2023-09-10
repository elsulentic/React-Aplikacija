import { useState } from "react";

export default function Input({ onSendMessage }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      setError("Ne možeš poslati praznu poruku!");
    } else {
      setError("");
      onSendMessage(text);
      setText("");
    }
  };
  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <h2 className="error">{error}</h2>
      <input
        className="inputText"
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        placeholder="Upiši poruku..."
        autoFocus={true}
      />
      <button type="submit" className="button">
        Pošalji
      </button>
    </form>
  );
}
