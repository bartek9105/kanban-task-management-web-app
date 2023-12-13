import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./SidebarToggle.module.scss";
import cn from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
};

export const SidebarToggle = ({ icon, className, ...rest }: ButtonProps) => (
  <button {...rest} className={cn(styles.container, className)}>
    {icon}
  </button>
);
