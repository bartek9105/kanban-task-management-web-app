import { AnimatePresence, motion } from "framer-motion";
import TextHeading from "../TextHeading";
import styles from "./Sidebar.module.scss";
import SidebarLinksList from "./SidebarLinksList";
import { appearAnimation, slideFromLeftAnimation } from "../../animations";
import { ReactComponent as Logo } from "../../icons/logo-full.svg";
import { ReactComponent as ArrowDown } from "../../icons/arrow-down.svg";
import { SidebarToggle } from "./SidebarToggle";
import cn from "classnames";
import { useGetBoards } from "../../api/boards";

interface SidebarProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const Sidebar = ({ isOpen, toggleIsOpen }: SidebarProps) => {
  const { data: boards } = useGetBoards();

  return (
    <>
      {!isOpen && (
        <div className={styles.sidebarHint}>
          <SidebarToggle
            className={styles.toggleOpen}
            onClick={toggleIsOpen}
            icon={<ArrowDown className={cn(styles.arrow, styles.arrowRight)} />}
          />
        </div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            key="overlay"
            {...appearAnimation}
          >
            <motion.nav
              key="sidebar"
              className={styles.sidebar}
              {...slideFromLeftAnimation}
            >
              <Logo className={styles.logo} />
              <TextHeading as="h4" className={styles.heading}>
                ALL BOARDS ({boards?.length || 0})
                <SidebarToggle
                  className={styles.toggleClosed}
                  onClick={toggleIsOpen}
                  icon={
                    <ArrowDown className={cn(styles.arrow, styles.arrowLeft)} />
                  }
                />
              </TextHeading>
              {boards && <SidebarLinksList links={boards} />}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
