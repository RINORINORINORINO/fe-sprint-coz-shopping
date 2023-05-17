import React from "react";
import styles from "./Product.module.css";
import { BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../../../store/slices/bookmarkSlice";
import { removeItem, restoreItem } from "../../../store/slices/fetchDataSlice";
import { openModal } from "../../../store/slices/modalSlice";

export default function Product({ item }) {
  if (!item) {
    return null;
  }
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);
  const setBookmarks = bookmarks.some((el) => el.id === item.id);

  const handleOpenModal = (e) => {
    e.stopPropagation();
    dispatch(openModal({ content: item, type: "Product" }));
  };

  const handleAddBookmark = (item) => {
    dispatch(addBookmark(item));
    dispatch(removeItem(item));
  };

  const handleRemoveBookmark = (item) => {
    dispatch(removeBookmark(item));
    dispatch(restoreItem(item));
  };

  const handleBookmarks = (e) => {
    e.stopPropagation();
    if (setBookmarks) {
      handleRemoveBookmark(item);
    } else {
      handleAddBookmark(item);
    }
  };

  return (
    <div className={styles.container} onClick={handleOpenModal}>
      <img src={item?.image_url} alt={item?.title} className={styles.img} />
      <BsStar className={styles.bookmarker} onClick={handleBookmarks} fill={setBookmarks ? "yellow" : "white"} />
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
