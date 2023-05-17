import React from "react";
import styles from "./Brand.module.css";
import { BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../../../store/slices/bookmarkSlice";
import { removeItem, restoreItem } from "../../../store/slices/fetchDataSlice";
import { openModal } from "../../../store/slices/modalSlice";

export default function Brand({ item }) {
  if (!item) {
    return null;
  }

  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);
  const setBookmarks = bookmarks.some((el) => el.id === item.id);

  const handleOpenModal = (e) => {
    e.stopPropagation();
    dispatch(openModal({ content: item, type: "Brand" }));
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
      <img src={item?.brand_image_url} alt={item?.brand_name} className={styles.img} />
      <BsStar className={styles.bookmarker} onClick={handleBookmarks} fill={setBookmarks ? "yellow" : "white"} />
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
