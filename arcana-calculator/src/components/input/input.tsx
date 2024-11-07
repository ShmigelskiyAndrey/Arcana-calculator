import styles from "./input.module.css";

interface InputFieldProps {
  type: "text" | "number" | "select";
  placeholder?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[];
}

function Input({ type, placeholder, value, onChange, options }: InputFieldProps) {
  return (
    <div className={styles.inputContainer}>
      {type === "select" ? (
        <select className={styles.select} value={value} onChange={onChange}>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export { Input }