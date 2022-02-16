import React, { FC, useEffect } from "react";


import './ProductList.scss'
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProducts } from "../../store/action-creators/productsAction";
import { useDispatch } from "react-redux";
import ProductCard from "../common/PorductCard/ProductCard";

const ProductList: FC = () => {
  // const dispatch = useDispatch();
  //
  // if (loading) {
  //   return <h1>loading...</h1>;
  // }
  // if (error) {
  //   return <h1>{error}</h1>;
  // }
  return (
    <div className="product-list">
      {/*{products.map((item) => {*/}
      {/*  return <ProductCard key={item.id} product={item} />;*/}
      {/*})}*/}
    </div>
  );
};

export default ProductList;
