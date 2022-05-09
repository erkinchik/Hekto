import React, { useEffect, useState } from "react";

import { ProductDetailsCard } from "../../components/index";

import { IProduct } from "../../types/productTypes";

import "./ProductDetailsPage.scss";
import { ProductApi } from "../../API/productApi";
import { useParams } from "react-router";
import { RouteParams } from "../../types/routeTypes";

const ProductDetailsPage = () => {
  const { id } = useParams<RouteParams>();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    ProductApi.getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div className="wrapper">
      <ProductDetailsCard product={product} />
    </div>
  );
};

export default ProductDetailsPage;
