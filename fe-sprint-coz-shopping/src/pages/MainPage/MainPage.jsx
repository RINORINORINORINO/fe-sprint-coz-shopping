import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/slices/fetchDataSlice";
import Product from "../../components/Contents/Product/Product";
import Exhibition from "../../components/Contents/Exhibition/Exhibition";
import Category from "../../components/Contents/Category/Category";
import Brand from "../../components/Contents/Brand/Brand";
import styles from "./MainPage.module.css";

export default function MainPage() {
  const dispatch = useDispatch();
  const cozData = useSelector((state) => state.cozData.data);
  const status = useSelector((state) => state.cozData.status);
  const bookmarks = useSelector((state) => state.bookmarks);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  // const filteredBookmark = cozData.filter((el) => !bookmarks.some((bookmark) => bookmark.id === el.id));

  const product = cozData.find((item) => item.type === "Product");
  const exhibition = cozData.find((item) => item.type === "Exhibition");
  const category = cozData.find((item) => item.type === "Category");
  const brand = cozData.find((item) => item.type === "Brand");

  const bookmarkProduct = bookmarks.find((item) => item.type === "Product");
  const bookmarkExhibition = bookmarks.find((item) => item.type === "Exhibition");
  const bookmarkCategory = bookmarks.find((item) => item.type === "Category");
  const bookmarkBrand = bookmarks.find((item) => item.type === "Brand");

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>상품 리스트</div>
      <div className={styles.container}>
        {product && <Product item={product} />}
        {exhibition && <Exhibition item={exhibition} />}
        {category && <Category item={category} />}
        {brand && <Brand item={brand} />}
      </div>
      <div className={styles.title}>북마크 리스트</div>
      <div className={styles.container}>
        {bookmarks.length === 0 ? (
          <>
            <div className={styles.emptyBookmark}>
              <img src="../images/empty.jpg" />
            </div>
            <div className={styles.emptyBookmark}>
              <img src="../images/empty.jpg" />
            </div>
            <div className={styles.emptyBookmark}>
              <img src="../images/empty.jpg" />
            </div>
            <div className={styles.emptyBookmark}>
              <img src="../images/empty.jpg" />
            </div>
          </>
        ) : (
          <>
            {bookmarkProduct && <Product item={bookmarkProduct} />}
            {bookmarkExhibition && <Exhibition item={bookmarkExhibition} />}
            {bookmarkCategory && <Category item={bookmarkCategory} />}
            {bookmarkBrand && <Brand item={bookmarkBrand} />}
          </>
        )}
      </div>
    </div>
  );
}

// const dispatch = useDispatch();
// const cozData = useSelector((state) => state.cozData.data);
// const status = useSelector((state) => state.cozData.status);

// const [randomItems, setRandomItems] = useState({
//   Product: null,
//   Exhibition: null,
//   Category: null,
//   Brand: null,
// });

// useEffect(() => {
//   if (status === "idle") {
//     dispatch(fetchData());
//   }
// }, [status, dispatch]);

// useEffect(() => {
//   cozData.forEach((item) => {
//     if (!randomItems[item.type]) {
//       setRandomItems((prevItems) => ({
//         ...prevItems,
//         [item.type]: item,
//       }));
//     }
//   });
// }, [cozData]);

// const types = ["Product", "Exhibition", "Category", "Brand"];

// const renderItem = (item) => {
//   switch (item.type) {
//     case "Product":
//       return (
//         <>
//           <img className={styles.image} src={item.image_url} alt={item.title} />
//           <p>{item.title}</p>
//           <p>{item.discountPercentage}%</p>
//           <p>{item.price}</p>
//         </>
//       );
//     case "Exhibition":
//       return (
//         <>
//           <img className={styles.image} src={item.image_url} alt={item.title} />
//           <p>{item.title}</p>
//           <p>{item.sub_title}</p>
//         </>
//       );
//     case "Category":
//       return (
//         <>
//           <img className={styles.image} src={item.image_url} alt={item.title} />
//           <p># {item.title}</p>
//         </>
//       );
//     case "Brand":
//       return (
//         <>
//           <img className={styles.image} src={item.image_url || item.brand_image_url} alt={item.brand_name} />
//           <p>{item.brand_name}</p>
//           <p>관심고객수</p>
//           <p>{item.follower}</p>
//         </>
//       );
//     default:
//       return null;
//   }
// };

// return (
//   <div className={styles.container}>
//     <div>상세 페이지</div>
//     <div className={styles.itemContainer}>
//       {types.map((type, index) =>
//         randomItems[type] ? (
//           <div key={index} className={styles.item}>
//             {renderItem(randomItems[type])}
//           </div>
//         ) : null
//       )}
//     </div>
//     <div>
//       <div>북마크 리스트</div>
//     </div>
//   </div>
// );
