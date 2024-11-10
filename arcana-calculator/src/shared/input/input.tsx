import styles from "./input.module.css";

interface InputFieldProps {
  type: "text" | "number";
  placeholder?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

function Input({ type, placeholder, value, onChange }: InputFieldProps) {
  return (
    <div className={styles.inputContainer}>
        <input
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