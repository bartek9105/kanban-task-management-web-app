import { forwardRef } from "react";
import TextBody from "../TextBody";
import TextHeading from "../TextHeading";
import styles from "./DnDListElement.module.scss";

interface DndListElementProps {
  title: string;
}

const DndListElement = forwardRef<HTMLDivElement, DndListElementProps>(
  ({ title, ...props }, ref) => {
    return (
      <div className={styles.container} {...props} ref={ref}>
        <TextHeading as="h3" className={styles.heading}>
          {title}
        </TextHeading>
        <TextBody variant="md" className={styles.hint}>
          0 of 3 subtasks
        </TextBody>
      </div>
    );
  }
);

export default DndListElement;
