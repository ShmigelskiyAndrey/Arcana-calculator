import styles from "./logo.module.css";
import cn from "classnames";

function Logo({ iconColor, circleColor, size, iconSize }: any) {
  const circleClass = cn(styles.circle, {
    [styles.gradient]: circleColor === "gradient",
  });

  return (
    <div className={styles.container} style={{"--size": size} as Record<string, string | number>}>
      <div className={circleClass}></div>
      <svg className={styles.logo} width={iconSize} height={iconSize} viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0976562 20C11.993 17.1111 16.2337 13.0697 19.2168 0.880863C21.4869 13.2078 25.7402 17.345 38.3359 20C26.1556 22.9423 21.8177 26.8923 19.2168 39.1191C15.8449 27.5621 11.691 23.3438 0.0976562 20Z" fill={iconColor}/>
      </svg>
    </div>
  )
}

export { Logo }