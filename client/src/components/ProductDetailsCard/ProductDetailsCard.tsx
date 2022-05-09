import React, { FC, useEffect } from "react";
import back from "../../assets/back.png";

import "./ProductDetailsCard.scss";
import { IProduct } from "../../types/productTypes";
import { Spinner } from "../index";
interface productDetailsCardProps {
  product: IProduct | null;
}

const ProductDetailsCard: FC<productDetailsCardProps> = ({ product }) => {
  if (!product) {
    return <Spinner />;
  }
  console.log(product);
  return (
    <div className="products-details ">
      <div className="product-details__card">
        <div className="product-details__photos-wrapper">
          <div className="product-details__photos">
            <div className="product-details__photo-item">
              <img src={back} alt="" />
            </div>
            <div className="product-details__photo-item">
              <img src={back} alt="" />
            </div>
            <div className="product-details__photo-item">
              <img src={back} alt="" />
            </div>
          </div>
          <div className="product-details__main-photo">
            <img src={back} alt="" />
          </div>
        </div>

        <article className="product-details__text">
          <div className="product-details__text-wrapper">
            <h3 className="product-details__title">{product.name}</h3>
            <div className="product-details__rating">{product.in_stock}</div>
            <span className="product-details__price">${product.price}</span>
            <p className="product-details__description">
              {product?.productInfo?.description}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eos
              explicabo nesciunt nihil non nulla perferendis possimus quae
              soluta voluptas. Lorem ipsum dolor sit amet, consectetur Lorem
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eos
              explicabo nesciunt nihil non nulla perferendis possimus quae
              soluta voluptas. Lorem ipsum dolor sit amet, consectetur Lorem
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            </p>
            <button className="product-details__cart-btn">Add to cart</button>
            <div className="product-details__categories">
              <span>Categories:</span>&nbsp;
              <ul className="product-details__categories list">
                <li>
                  <a href="">new</a>
                </li>
                <li>
                  <a href="">add</a>
                </li>
                <li>
                  <a href="">like</a>
                </li>
              </ul>
            </div>
            {/*<div className="product-details__tags">*/}
            {/*  <span>Tags:</span>&nbsp;*/}
            {/*  <ul className="product-details__tags list">*/}
            {/*    <li>*/}
            {/*      <a href="">new</a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a href="">add</a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a href="">like</a>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
            <div className="product-details__share">
              <span>Share:</span>&nbsp;
              <ul className="product-details__share list">
                <li>
                  <a href="">new</a>
                </li>
                <li>
                  <a href="">add</a>
                </li>
                <li>
                  <a href="">like</a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
