import { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "destructive";
  size?: "small" | "big";
};

const Button = ({
  children,
  variant = "primary",
  size = "small",
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={cn(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.destructive]: variant === "destructive",
        [styles.small]: size === "small",
        [styles.big]: size === "big",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
