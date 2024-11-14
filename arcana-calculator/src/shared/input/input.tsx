import styles from "./input.module.css";
import React, { useEffect, useRef } from "react";

interface InputFieldProps {
  type: "text" | "number";
  placeholder?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

function Input({ type, placeholder, value, onChange }: InputFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const inputElement = inputRef.current;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
    };

    if (inputElement) {
      inputElement.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        inputElement.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);
  return (
    <div className={styles.inputContainer}>
        <input
          ref={inputRef}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
    </div>
  );
}

export { Input }