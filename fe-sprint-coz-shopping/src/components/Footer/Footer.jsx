import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topText}>개인정보 처리방침 l 이용약관 </div>
      <div className={styles.bottomText}>All rights reserved @ Codestates</div>
    </footer>
  );
}
