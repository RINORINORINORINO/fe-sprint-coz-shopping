import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import { SlPresent } from "react-icons/sl";
import { AiOutlineStar } from "react-icons/ai";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Link to="/" className={styles.linkbutton}>
        <div>현석님 어서오세요!</div>
      </Link>
      <Link to="/item/list" className={styles.linkbutton}>
        <div>
          <SlPresent className={styles.icons} />
          상품 페이지
        </div>
      </Link>
      <Link to="/bookmark" className={styles.linkbutton}>
        <div>
          <AiOutlineStar className={styles.icons} />
          북마크 페이지
        </div>
      </Link>
    </div>
  );
}
