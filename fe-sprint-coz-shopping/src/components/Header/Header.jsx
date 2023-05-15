import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/slices/menuSlice";
import Menu from "../Menu/Menu";

export default function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="./images/로고.png" />
          <span>COZ SHOP</span>
        </Link>
      </div>
      <GiHamburgerMenu className={styles.menuIcon} onClick={() => dispatch(toggleMenu())} />
      {isOpen && <Menu />}
    </header>
  );
}
