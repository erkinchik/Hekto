import React, { FC } from "react";

import { IProduct } from "../../types/productTypes";

interface ProductProps {
  item: IProduct;
}

const ProductItem: FC<ProductProps> = ({ item }) => {
  return <div>{item.name}</div>;
};

export default ProductItem;
