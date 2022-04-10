import React from "react";

import CartProductCard from "../../components/CartProductCard/CartProductCard";

import "./CartPage.scss";

const CartPage = () => {
  return (
    <div className="wrapper">
      <div className="cart-products-wrapper ">
        <div className="cart-products">
          <div className="cart-products__header">
            <span className="cart-products__column-text title">Product</span>
            <div className="cart-products__column-text-block">
              <span className="cart-products__column-text cart-column-text">
                Price
              </span>
              <span className="cart-products__column-text cart-column-text">
                Quantity
              </span>
              <span className="cart-products__column-text cart-column-text">
                Total
              </span>
            </div>
          </div>
          <div className="cart-products products">
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
          </div>

          <div className="cart-products__buttons">
            <button className="cart-products__button button">Clear cart</button>
          </div>
        </div>

        <div className="cart-total">
          <h3 className="cart-total__title">Cart Total</h3>

          <div className="cart-total__item">
            <div className="cart-total__item-text">
              <span className="cart-total__item-title">Total:</span>
              <span className="cart-total__item-total">$32.00</span>
            </div>

            <button className="cart-total__button">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
