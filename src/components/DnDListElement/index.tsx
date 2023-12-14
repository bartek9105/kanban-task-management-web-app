import { forwardRef } from "react";
import TextBody from "../TextBody";
import TextHeading from "../TextHeading";
import styles from "./DnDListElement.module.scss";

const DndListElement = forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <div className={styles.container} {...props} ref={ref}>
      <TextHeading as="h3" className={styles.heading}>
        Build UI for onboarding flow
      </TextHeading>
      <TextBody variant="md" className={styles.hint}>
        0 of 3 subtasks
      </TextBody>
    </div>
  );
});

export default DndListElement;
