import styles from "./input.module.css";
import React, { useEffect, useRef } from "react";

interface InputFieldProps {
  type: "text" | "number";
  placeholder?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  validate?: (value: string) => string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

function Input({ type, placeholder, value, onChange, validate, onBlur }: InputFieldProps) {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    if (validate) {
      newValue = validate(newValue);
    }

    onChange({ ...event, target: { ...event.target, value: newValue } });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"];
    if (!/^\d$/.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <div className={styles.inputContainer}>
        <input
          ref={inputRef}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
    </div>
  );
}

export { Input }