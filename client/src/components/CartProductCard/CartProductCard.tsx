import React, { FC } from "react";

import fff from "../../assets/back.png";

import "./CartProductCard.scss";

const CartProductCard: FC = () => {
  return (
    <div className="product-cart">
      <div className="product-cart__inner">
        <div className="product-cart__image">
          <img src={fff} alt="" />
        </div>
        <div className="product-cart__text">
          <h4 className="product-cart__title">Ut diam consequat</h4>
          <p className="product-cart__description">color: brown</p>
        </div>
      </div>

      <span className="product-cart__price">$32.00</span>
      <div className="product-cart__quantity">
        <button className="product-cart__increase">-</button>
        <span className="product-cart__quantity-text">1</span>
        <button className="product-cart__decrease">+</button>
      </div>
      <span className="product-cart__total">$243.00</span>
    </div>
  );
};

export default CartProductCard;
