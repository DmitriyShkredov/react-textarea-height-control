import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target?.value || "");
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      const height = textAreaRef.current?.scrollHeight;
      textAreaRef.current.style.height = height + "px";
    }
  }, [value]);

  return (
    <form className="form">
      <textarea
        className="textarea"
        placeholder="Введите текст"
        ref={textAreaRef}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}
