import { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "destructive";
  size?: "sm" | "lg";
};

const Button = ({
  children,
  variant = "primary",
  size = "sm",
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={cn(styles.button, {
        [styles.buttonPrimary]: variant === "primary",
        [styles.buttonSecondary]: variant === "secondary",
        [styles.buttonDestructive]: variant === "destructive",
        [styles.buttonSmall]: size === "sm",
        [styles.buttonBig]: size === "lg",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
