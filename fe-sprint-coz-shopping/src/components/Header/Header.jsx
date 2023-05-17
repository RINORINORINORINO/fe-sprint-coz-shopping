import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/slices/menuSlice";
import Menu from "../Menu/Menu";

export default function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);

  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) {
        dispatch(toggleMenu());
      }
    };
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, [dispatch, isOpen]);
  //다른 상태관리 라이브러리를 함께 사용하거나 'dispatch'가 변경될 수 있는 상황이 발생할 수도 있기에 'dispatch를 포함시켜주는 게 좋은 습관'

  const handleClick = (e) => {
    e.stopPropagation(); //이벤트 버블링을 중단시키는 메서드 'event.stopPropagation()'
    dispatch(toggleMenu());
  };

  return (
    <header className={styles.header}>
      {/* //onClick={(e) => e.stopPropagation()}를 속성으로 넣어주면 header 컴포넌트를 눌렀을 때는 메뉴가 닫히지 않음 */}
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <img src="../images/Logo.png" />
          <span>COZ SHOP</span>
        </Link>
      </div>
      <GiHamburgerMenu className={styles.menuIcon} onClick={handleClick} />
      {isOpen && <Menu />}
    </header>
  );
}
