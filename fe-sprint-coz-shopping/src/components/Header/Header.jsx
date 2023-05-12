import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="./images/로고.png" />
          <span>COZ SHOP</span>
        </Link>
      </div>
      <GiHamburgerMenu className={styles.menuIcon} />
    </header>
  );
}
