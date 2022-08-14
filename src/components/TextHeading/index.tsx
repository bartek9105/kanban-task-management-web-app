import { PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./Heading.module.scss";

type TextHeadingElement = "h1" | "h2" | "h3" | "h4";

type TextHeadingProps = PropsWithChildren<{
  as: TextHeadingElement;
}>;

const TextHeading = ({ children, as }: TextHeadingProps) => {
  const Element = as;
  return (
    <Element
      className={cn(styles.heading, {
        [styles.headingElementLevel1]: as === "h1",
        [styles.headingElementLevel2]: as === "h2",
        [styles.headingElementLevel3]: as === "h3",
        [styles.headingElementLevel4]: as === "h4",
      })}
    >
      {children}
    </Element>
  );
};

export default TextHeading;
