import React from "react";
import styles from "./Product.module.css";

export default function Product({ item }) {
  return (
    <div className={styles.container}>
      <img src={item.image_url} alt={item.title} className={styles.img} />
      <div>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.discount}>{item.discountPercentage}%</span>
        <span className={styles.price}>{item.price}</span>
      </div>
    </div>
  );
}
