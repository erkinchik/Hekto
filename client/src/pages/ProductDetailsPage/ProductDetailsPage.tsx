import React from "react";

import back from "../../assets/back.png";


import "./ProductDetailsPage.scss";

const ProductDetailsPage = () => {
  return (
    <div className="product-details-wrapper">
      <div className="products-details">
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
              <h3 className="product-details__title">Playwood arm chair</h3>
              <div className="product-details__rating">rating</div>
              <span className="product-details__price">$32.00</span>
              <p className="product-details__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                eos explicabo nesciunt nihil non nulla perferendis possimus quae
                soluta voluptas. Lorem ipsum dolor sit amet, consectetur Lorem
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                eos explicabo nesciunt nihil non nulla perferendis possimus quae
                soluta voluptas. Lorem ipsum dolor sit amet, consectetur Lorem
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              </p>
              <a href="#" className="product-details__cart-btn">
                Add to cart
              </a>
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
    </div>
  );
};

export default ProductDetailsPage;
