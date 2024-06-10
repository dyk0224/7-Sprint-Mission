import back from "../images/back.svg";
import "./ProductDetail.css";
import { getProductId, getProductIdComments } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductComment from "./ProductComment";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductInquiry from "./ProductInquiry";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const [detailItem, setDetailItem] = useState({
    id: 0,
    name: "",
    description: "",
    price: 0,
    tags: [],
    images: [],
    ownerId: 0,
    favoriteCount: 0,
    createdAt: "",
    updatedAt: "",
    isFavorite: false,
  });
  const [itemComment, setItemComment] = useState([]);

  const getProductDetail = async () => {
    const data = await getProductId({ productId });
    const comment = await getProductIdComments({ productId });
    setDetailItem(data);
    setItemComment(comment);
  };

  useEffect(() => {
    getProductDetail();
  }, [productId]);

  console.log(detailItem);
  console.log(itemComment);

  return (
    <div className="detail-wrapper">
      <ProductDetailInfo detailItem={detailItem} />
      <div className="line"></div>
      <ProductInquiry />
      <ProductComment comment={itemComment} />
      <Link to="/items" className="comment-link">
        <button className="list-button">
          목록으로 돌아가기
          <img
            src={back}
            alt="목록으로 돌아가기"
            width="24"
            height="24"
            className="list-img"
          />
        </button>
      </Link>
    </div>
  );
}

export default ProductDetail;
