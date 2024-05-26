import React, { useState, useEffect } from "react";
import "./BestItemsSection.css";
import { getProducts } from "../../api";
import ItemCard from "../ItemCard/ItemCard";

const BestItemsSection = () => {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [orderBy, setOderBy] = useState("favorite");
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const imageSize = {
    imageWidth: "282px",
    imageHeight: "282px",
  };
  const handleLoad = async ({ page, pageSize, orderBy }) => {
    const productsData = await getProducts({ page, pageSize, orderBy });
    setItems(productsData.list);
  };
  const changePageSize = (windowInnerWidth) => {
    if (windowInnerWidth < 1199 && windowInnerWidth > 744) {
      setPageSize(2);
    } else if (windowInnerWidth < 744) {
      setPageSize(1);
    } else {
      setPageSize(4);
    }
  };

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    changePageSize(windowInnerWidth);
    window.addEventListener("resize", handleResize);
  }, [windowInnerWidth]);

  useEffect(() => {
    handleLoad({ pageSize, orderBy });
  }, [pageSize]);

  return (
    <section className="best-items-section-container">
      <h1 className="best-items-section-title">베스트상품</h1>
      <ul className="best-items-section-content">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} imageSize={imageSize} />
        ))}
      </ul>
    </section>
  );
};

export default BestItemsSection;
