import Link from "next/link";
import styles from "./Button.module.scss";
const Button = ({ children, href = "/", variant = "", className = "" }) => {
  return (
    <Link href={href}>
      <a className={`${styles.button} ${styles[variant]} ${className}`}>
        {children}
      </a>
    </Link>
  );
};

export default Button;
