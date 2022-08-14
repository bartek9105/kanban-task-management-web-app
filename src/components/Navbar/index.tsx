import { ReactComponent as LogoIcon } from "../../icons/logo.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <LogoIcon />
    </nav>
  );
};

export default Navbar;
