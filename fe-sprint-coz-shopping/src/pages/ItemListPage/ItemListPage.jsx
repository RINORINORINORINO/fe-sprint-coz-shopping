import React from "react";
import Product from "../../components/Contents/Product/Product";
import Exhibition from "../../components/Contents/Exhibition/Exhibition";
import Category from "../../components/Contents/Category/Category";
import Brand from "../../components/Contents/Brand/Brand";
import { useSelector } from "react-redux";

export default function ItemList() {
  const cozData = useSelector((state) => state.cozData.data);

  return (
    <div>
      {cozData.map((item) => {
        switch (item.type) {
          case "Product":
            return <Product item={item} />;
          case "Exhibition":
            return <Exhibition item={item} />;
          case "Category":
            return <Category item={item} />;
          case "Brand":
            return <Brand item={item} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
