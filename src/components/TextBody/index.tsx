import { PropsWithChildren } from "react";
import styles from "./TextBody.module.scss";
import cn from "classnames";

type Variant = "sm" | "md";

type TextBodyProps = PropsWithChildren<{
  variant: Variant;
}>;

const TextBody = ({ children, variant }: TextBodyProps) => {
  return (
    <p
      className={cn(styles.textBody, {
        [styles.textBodySmall]: variant === "sm",
        [styles.textBodyMedium]: variant === "md",
      })}
    >
      {children}
    </p>
  );
};

export default TextBody;
