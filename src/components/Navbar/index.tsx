import { useState } from "react";
import { ReactComponent as LogoIcon } from "../../icons/logo.svg";
import styles from "./Navbar.module.scss";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className={styles.container}>
        <LogoIcon />
      </nav>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleIsOpen={() => setIsSidebarOpen(!isSidebarOpen)}
      />
    </>
  );
};

export default Navbar;
