import { PropsWithChildren } from "react";
import styles from "./TextBody.module.scss";
import cn from "classnames";

type Variant = "sm" | "md";

type TextBodyProps = PropsWithChildren<{
  variant: Variant;
  className?: string;
}>;

const TextBody = ({ children, variant, className }: TextBodyProps) => {
  return (
    <p
      className={cn(
        styles.textBody,
        {
          [styles.textBodySmall]: variant === "sm",
          [styles.textBodyMedium]: variant === "md",
        },
        className
      )}
    >
      {children}
    </p>
  );
};

export default TextBody;
