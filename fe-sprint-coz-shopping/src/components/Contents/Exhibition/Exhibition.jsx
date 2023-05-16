import React from "react";
import styles from "./Exhibition.module.css";
import { BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../../../store/slices/bookmarkSlice";
import { removeItem, restoreItem } from "../../../store/slices/fetchDataSlice";

export default function Exhibition({ item }) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);
  const setBookmarks = bookmarks.some((el) => el.id === item.id);

  const handleAddBookmark = (item) => {
    dispatch(addBookmark(item));
    dispatch(removeItem(item));
    dispatch(fetchNewData(item.id));
  };

  const handleRemoveBookmark = (item) => {
    dispatch(removeBookmark(item));
    dispatch(restoreItem(item));
  };

  const handleBookmarks = () => {
    if (setBookmarks) {
      handleRemoveBookmark(item);
    } else {
      handleAddBookmark(item);
    }
  };

  return (
    <div className={styles.container}>
      <img src={item.image_url} alt={item.title} className={styles.img} />
      <BsStar className={styles.bookmarker} onClick={handleBookmarks} fill={setBookmarks ? "yellow" : "white"} />
      <div>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.sub_title}>{item.sub_title}</span>
      </div>
    </div>
  );
}
