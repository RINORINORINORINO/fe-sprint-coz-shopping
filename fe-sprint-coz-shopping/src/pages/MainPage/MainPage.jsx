import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/slices/fetchDataSlice";
import Product from "../../components/Contents/Product/Product";
import Exhibition from "../../components/Contents/Exhibition/Exhibition";
import Category from "../../components/Contents/Category/Category";
import Brand from "../../components/Contents/Brand/Brand";

export default function MainPage() {
  const dispatch = useDispatch();
  const cozData = useSelector((state) => state.cozData.data);
  const status = useSelector((state) => state.cozData.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const product = cozData.find((item) => item.type === "Product");
  const exhibition = cozData.find((item) => item.type === "Exhibition");
  const category = cozData.find((item) => item.type === "Category");
  const brand = cozData.find((item) => item.type === "Brand");

  return (
    <div>
      <div>상품 리스트</div>
      <div>
        {product && <Product item={product} />}
        {exhibition && <Exhibition item={exhibition} />}
        {category && <Category item={category} />}
        {brand && <Brand item={brand} />}
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
