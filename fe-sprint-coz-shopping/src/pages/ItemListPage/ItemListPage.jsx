import React from "react";
import Product from "../../components/Contents/Product/Product";
import Exhibition from "../../components/Contents/Exhibition/Exhibition";
import Category from "../../components/Contents/Category/Category";
import Brand from "../../components/Contents/Brand/Brand";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../store/slices/tabsSlice";
import styles from "./ItemListPage.module.css";

export default function ItemList() {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.tabs.currentTab);

  const handleTab = (tab) => {
    console.log("Setting tab to:", tab);
    dispatch(setTab(tab));
  };

  return (
    <>
      <div className={styles.tabsContainer}>
        <button onClick={() => handleTab("all")}>전체</button>
        <button onClick={() => handleTab("product")}>상품</button>
        <button onClick={() => handleTab("exhibition")}>전시회</button>
        <button onClick={() => handleTab("category")}>카테고리</button>
        <button onClick={() => handleTab("brand")}>브랜드</button>
      </div>
      {tab === "all" && (
        <>
          <Product />
          <Exhibition />
          <Category />
          <Brand />
        </>
      )}
      {tab === "product" && <Product />}
      {tab === "exhibition" && <Exhibition />}
      {tab === "category" && <Category />}
      {tab === "brand" && <Brand />}
    </>
  );
}
