import React from "react";
import styles from "./Category.module.css";
import { BsStar } from "react-icons/bs";

export default function Category({ item }) {
  return (
    <div className={styles.container}>
      <img src={item.image_url} alt={item.title} className={styles.img} />
      <BsStar className={styles.bookmarker} />
      <div>
        <span className={styles.title}># {item.title}</span>
      </div>
    </div>
  );
}
