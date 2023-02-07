import React from "react";
import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <span role="img" aria-label="metal hand emoji">
        🤘
      </span>
      <span role="img" aria-label="musical keyboard emoji">
        🎹
      </span>
      <span role="img" aria-label="metal notes emoji">
        🎵
      </span>
    </h1>
  );
};
