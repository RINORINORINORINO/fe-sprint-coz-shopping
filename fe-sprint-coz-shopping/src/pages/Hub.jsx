import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import styles from "./Hub.module.css";

export default function Hub() {
  return (
    <div className={styles.container}>
      <Header />
      <Modal />
      <Outlet />
      <Footer />
    </div>
  );
}
