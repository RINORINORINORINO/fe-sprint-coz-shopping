import React from "react";
import styles from "./Brand.module.css";
import { BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark, removeToBookmark } from "../../../store/slices/bookmarkSlice";

export default function Brand({ item }) {
  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.bookmark);

  const handleBookmark = () => {
    if (bookmark) {
      dispatch(removeToBookmark(item));
    } else {
      dispatch(addToBookmark(item));
    }
  };

  return (
    <div className={styles.container}>
      <img src={item.brand_image_url} alt={item.brand_name} className={styles.img} />
      <BsStar className={styles.bookmarker} onClick={handleBookmark} />
      <div className={styles.info}>
        <div className={styles.topInfo}>
          <span className={styles.brand_name}>{item.brand_name}</span>
          <span className={styles.client}>관심고객수</span>
        </div>
        <span className={styles.follower}>{item.follower}</span>
      </div>
    </div>
  );
}
