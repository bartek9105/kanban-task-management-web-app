import { PropsWithChildren } from "react";
import Navbar from "../Navbar";
import styles from "./MainLayout.module.scss";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main className={styles.content}>{children}</main>
    </>
  );
};
