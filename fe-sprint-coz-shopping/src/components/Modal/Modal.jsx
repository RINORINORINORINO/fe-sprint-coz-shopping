import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import { closeModal } from "../../store/slices/modalSlice";
import { BsStar } from "react-icons/bs";
import { addBookmark, removeBookmark } from "../../store/slices/bookmarkSlice";
import { removeItem, restoreItem } from "../../store/slices/fetchDataSlice";

export default function Modal() {
  const dispatch = useDispatch();
  const { isOpen, content, type } = useSelector((state) => state.modal);
  const bookmarks = useSelector((state) => state.bookmarks);

  if (!isOpen) return null;
  const displayContent = content || {};
  const setBookmarks = bookmarks.some((el) => el.id === displayContent.id);

  const handleAddBookmark = (displayContent) => {
    dispatch(addBookmark(displayContent));
    dispatch(removeItem(displayContent));
  };

  const handleRemoveBookmark = (displayContent) => {
    dispatch(removeBookmark(displayContent));
    dispatch(restoreItem(displayContent));
  };

  const handleBookmarks = (e) => {
    e.stopPropagation();
    if (setBookmarks) {
      handleRemoveBookmark(displayContent);
    } else {
      handleAddBookmark(displayContent);
    }
  };

  const renderContent = () => {
    switch (type) {
      case "Product":
        return (
          <>
            <img className={styles.modalImg} src={displayContent.image_url} alt={displayContent.title} />
            <div className={styles.textContainer}>
              <BsStar className={styles.bookmark} onClick={handleBookmarks} />
              {displayContent.title}
            </div>
          </>
        );
      case "Exhibition":
        return (
          <>
            <img className={styles.modalImg} src={displayContent.image_url} alt={displayContent.title} />
            <div className={styles.textContainer}>
              <BsStar className={styles.bookmark} onClick={handleBookmarks} />
              {displayContent.title}
            </div>
          </>
        );
      case "Category":
        return (
          <>
            <img className={styles.modalImg} src={displayContent.image_url} alt={displayContent.title} />
            <div className={styles.textContainer}>
              <BsStar className={styles.bookmark} onClick={handleBookmarks} />
              {displayContent.title}
            </div>
          </>
        );
      case "Brand":
        return (
          <>
            <img className={styles.modalImg} src={displayContent.brand_image_url} alt={displayContent.brand_name} />
            <div className={styles.textContainer}>
              <BsStar className={styles.bookmark} onClick={handleBookmarks} />
              {displayContent.brand_name}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.modalMain} onClick={() => dispatch(closeModal())}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {renderContent()}
      </div>
    </div>
  );
}
