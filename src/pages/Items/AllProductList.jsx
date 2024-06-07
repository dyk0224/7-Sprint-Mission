import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllProductItem from './AllProductItem';
import Pagination from './Pagination';
import { getProductItem } from './api';
import searchIcon from '../../assets/search_icon.svg';

const AllProductList = ({ pageSize, title, TopContainer }) => {
  // api 상태 관리
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState('recent');
  // orderSelect 상태 관리
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // pagination 상태 관리
  const [totalCount, setTotalCount] = useState(0);

  const handleOrderSelectClick = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleDropdownClick = (e) => {
    e.target.id === 'recent' ? setOrder('recent') : setOrder('favorite');

    setIsDropdownVisible(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const getAllProduct = async () => {
      const data = await getProductItem(currentPage, pageSize, order);
      setProduct(data.list);
      setTotalCount(data.totalCount);
    };
    getAllProduct();
  }, [order, currentPage, pageSize]);

  return (
    <section className="all-product">
      {TopContainer === 'pc_tablet' && (
        <div className="top-container">
          <h2>{title}</h2>
          <div>
            <div className="search-wrap">
              <img src={searchIcon} alt="검색아이콘" />
              <input
                className="search-input"
                type="text"
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
            <Link to="/additem">
              <button className="product-registration-btn" type="button">
                상품 등록하기
              </button>
            </Link>
            <div className="order-wrap">
              <button
                type="button"
                className="order-select"
                onClick={handleOrderSelectClick}
              >
                {order === 'recent' ? '최신순' : '좋아요순'}
              </button>
              {isDropdownVisible && (
                <ul className="order-dropdown">
                  <li
                    className="order-option"
                    id="recent"
                    onClick={handleDropdownClick}
                  >
                    최신순
                  </li>
                  <li
                    className="order-option"
                    id="favorite"
                    onClick={handleDropdownClick}
                  >
                    좋아요순
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
      {TopContainer === 'mobile' && (
        <div className="top-container-m">
          <div className="top-wrap">
            <h2>{title}</h2>
            <Link to="/additem">
              <button className="product-registration-btn" type="button">
                상품 등록하기
              </button>
            </Link>
          </div>
          <div className="bottom-wrap">
            <div className="search-wrap">
              <img src={searchIcon} alt="검색아이콘" />
              <input
                className="search-input"
                type="text"
                placeholder="검색할 상품을 입력해주세요"
              />
            </div>
            <div className="order-wrap">
              <button
                type="button"
                className="order-select"
                onClick={handleOrderSelectClick}
              ></button>
              {isDropdownVisible && (
                <ul className="order-dropdown">
                  <li
                    className="order-option"
                    id="recent"
                    onClick={handleDropdownClick}
                  >
                    최신순
                  </li>
                  <li
                    className="order-option"
                    id="favorite"
                    onClick={handleDropdownClick}
                  >
                    좋아요순
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
      <ul className="item-list">
        {product.map((item) => (
          <li key={item.id}>
            <Link to={`./${item.id}`} className="item-link">
              <AllProductItem
                imgUrl={item.images[0]}
                name={item.name}
                price={item.price}
                favoriteCount={item.favoriteCount}
              />
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalItems={totalCount}
        itemsPerPage={pageSize}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default AllProductList;
