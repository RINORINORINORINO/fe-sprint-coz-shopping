import React from "react";
import styles from "./Product.module.css";
import { BsStar } from "react-icons/bs";

export default function Product({ item }) {
  return (
    <div className={styles.container}>
      <img src={item.image_url} alt={item.title} className={styles.img} />
      <BsStar className={styles.bookmarker} />
      <div className={styles.info}>
        <div className={styles.topInfo}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.discount}>{item.discountPercentage}%</span>
        </div>
        <span className={styles.price}>{item.price}</span>
      </div>
    </div>
  );
}
