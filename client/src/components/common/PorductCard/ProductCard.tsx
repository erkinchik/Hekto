import React, { ChangeEvent, FC } from "react";

import "./ProductCard.scss";
import { IProduct } from "../../../types/productTypes";
import camera from "../../../assets/cam.png";
import { ReactComponent as BasketIcon } from "../../../assets/basket.svg";
import { ReactComponent as LoopIcon } from "../../../assets/loop.svg";
import { ReactComponent as WishIcon } from "../../../assets/wish.svg";
import { ReactComponent as SaleIcon } from "../../../assets/saleIcon.svg";

import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../store/action-creators/basketAction";

interface ProductCardProps {
  product: IProduct;
  onClick?: (id: number) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handler = (product: IProduct): void => {
    dispatch(addToBasket(product));
  };

  return (
    <div
      className="card-body"
      onClick={() => history.push(`/product/${product.id}`)}
    >
      {product.sale && (
        <div className="card-sale">
          <SaleIcon />
        </div>
      )}
      <div className="card-image">
        <img src={camera} alt={product.name} />
      </div>

      <div className="card-text">
        <span className="card-text__name">{product.name}</span>
        <span className="card-text__price">${product.price}</span>
      </div>

      <div className="card-buttons">
        <button
          className="card-buttons__add-btn"
          onClick={(e): void => {
            e.stopPropagation();
            handler(product);
          }}
        >
          <BasketIcon
            className="card-buttons__basket-icon"
            width="22"
            height="22"
          />
        </button>
        <button className="card-buttons__scale-btn">
          <LoopIcon />
        </button>
        <button className="card-buttons__wish-btn">
          <WishIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
