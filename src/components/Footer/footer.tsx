import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear;

  return (
    <footer className={styles.footer}>
      <> BamboTims {currentYear}</>
    </footer>
  );
};
