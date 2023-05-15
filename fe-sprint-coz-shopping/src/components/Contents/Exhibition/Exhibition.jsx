import React from "react";
import styles from "./Exhibition.module.css";
import { BsStar } from "react-icons/bs";

export default function Exhibition({ item }) {
  return (
    <div className={styles.container}>
      <img src={item.image_url} alt={item.title} className={styles.img} />
      <BsStar className={styles.bookmarker} />
      <div>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.sub_title}>{item.sub_title}</span>
      </div>
    </div>
  );
}
