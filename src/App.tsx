import { useState, useRef, useEffect } from "react";
import type { ChangeEvent } from "react";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target?.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const height = textareaRef.current?.scrollHeight;
      textareaRef.current.style.height = height + "px";
    }
  }, [value]);

  return (
    <form className="form">
      <textarea
        className="textarea"
        placeholder="Введите текст"
        ref={textareaRef}
        value={value}
        onChange={handleChange}
      ></textarea>
    </form>
  );
}
