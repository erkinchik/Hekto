import React, { FC } from "react";

import "./ProductCard.scss";
import { IProduct } from "../../../types/productTypes";
import camera from "../../../assets/cam.png";
import { ReactComponent as BasketIcon } from "../../../assets/basket.svg";
import { ReactComponent as LoopIcon } from "../../../assets/loop.svg";
import { ReactComponent as WishIcon } from "../../../assets/wish.svg";
import { ReactComponent as SaleIcon } from "../../../assets/saleIcon.svg";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {

  return (
    <div className="card-body">
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
        <button className="card-buttons__add-btn">
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
