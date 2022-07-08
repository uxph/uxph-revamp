import Link from "next/link";
import styles from "./Button.module.scss";
const Button = ({
  children,
  href = "/",
  variant = "default",
  className = "",
  isExternal = false,
}) => {
  return (
    <Link href={href}>
      {isExternal ? (
        <a
          className={`${styles.button} ${styles[variant]} ${className}`}
          target="_blank"
        >
          {children}
        </a>
      ) : (
        <a className={`${styles.button} ${styles[variant]} ${className}`}>
          {children}
        </a>
      )}
    </Link>
  );
};

export default Button;
