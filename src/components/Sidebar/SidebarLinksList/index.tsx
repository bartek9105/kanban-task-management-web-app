import styles from "./SidebarLinksList.module.scss";
import cn from "classnames";
import { ReactComponent as BoardIcon } from "../../../icons/board.svg";
import { ReactComponent as PlusIcon } from "../../../icons/plus.svg";
import TextHeading from "../../TextHeading";
import { staggerChildrenAnimation } from "../../../animations";
import { motion } from "framer-motion";

interface SidebarLinksListProps {
  links: string[];
}

const SidebarLinksList = ({ links }: SidebarLinksListProps) => {
  return (
    <motion.ul
      variants={staggerChildrenAnimation.container}
      initial="hidden"
      animate="show"
    >
      {links.map((board, index) => (
        <motion.li
          variants={staggerChildrenAnimation.item}
          className={cn(styles.listItem, {
            [styles.activeListItem]: index === 1,
          })}
          key={index}
        >
          <BoardIcon />
          <TextHeading as="h3">{board}</TextHeading>
        </motion.li>
      ))}
      <li
        key="create-new-board"
        className={cn(styles.listItem, styles.newBoardListItem)}
      >
        <PlusIcon />
        <TextHeading as="h3">Create new board</TextHeading>
      </li>
    </motion.ul>
  );
};

export default SidebarLinksList;
