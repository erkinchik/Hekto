import React, { useEffect, useState } from "react";

import { ProductDetailsCard } from "../../components/index";
import { IProduct } from "../../types/productTypes";

import "./ProductDetailsPage.scss";

const ProductDetailsPage = () => {
  // const [data, setData] = useState<IProduct>({});

  return (
    <div className="wrapper">
      <ProductDetailsCard />
    </div>
  );
};

export default ProductDetailsPage;
