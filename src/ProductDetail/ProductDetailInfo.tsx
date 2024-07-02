import React from "react";
import detail_heart from "../images/detail-heart.svg";
import morebutton from "../images/morebutton.svg";

function formatNumber(number: number): string {
  return new Intl.NumberFormat("ko-KR").format(number) + "원";
}

interface DetailInfoItem {
  id:number;
  name:string;
  description:string;
  price:number;
  tags:string[];
  images:string[];
  ownerId:number;
  favoriteCount:number;
  createdAt:string;
  updatedAt:string;
  isFavorite:boolean;
}
interface DetailInfoProps {
  detailItem: DetailInfoItem;
}
const ProductDetailInfo = ({ detailItem }: DetailInfoProps) => {
  return (
    <div className="detailInfo">
      <img
        className="img-detail"
        src={detailItem.images[0]}
        alt="상품 상세 사진"
        width={"486px"}
        height={"486px"}
      />

      <div className="Info-wrapper">
        <div className="Info-wrapper-name">
          <h1 className="detailItem-name">{detailItem.name}</h1>
          <img src={morebutton} alt="더보기" width="24" height="24" />
        </div>

        <h1 className="detailItem-price">{formatNumber(detailItem.price)}</h1>
        <div className="top-wrapper-line"></div>
        <p className="top-wrapper-title">상품 소개</p>
        <p className="detailItem-description">{detailItem.description}</p>
        <p className="top-wrapper-title">상품 태그</p>
        {detailItem.tags.map((tag, index) => (
          <p key={index} className="detailItem-tags">
            {`#${tag}`}
          </p>
        ))}

        <button className="favorite-count">
          <img src={detail_heart} alt="좋아요" width="32" height="32" />
          <span className="favorite-count-number">
            {detailItem.favoriteCount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
