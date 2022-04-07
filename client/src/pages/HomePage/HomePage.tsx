import React, { FC, useEffect } from "react";

import "./HomePage.scss";
import { MySlider, ProductList, ItemsList } from "../../components/index";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProducts } from "../../store/action-creators/productsAction";
import { fetchCategories } from "../../store/action-creators/categoryAction";
import { useDispatch } from "react-redux";
import ProductSort from "../../components/common/ProductSort/ProductSort";

const HomePage: FC = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useTypedSelector(
    (state) => state.products
  );


  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    // dispatch(fe)
  }, []);

  return (
    <div className="home-page">
      <section className="home-page__slider">
        <MySlider />
      </section>
      <section className="home-page__products">
        {/*<ProductList />*/}
        <ProductSort results={products.count} />
        {/*<ItemsList list={categories} loading={loading} error={error} />*/}
        <ItemsList list={products.rows} loading={loading} error={error} />
      </section>
      {/*<section className="section2">/!*<ProductList />*!/</section>*/}
    </div>
  );
};

export default HomePage;
