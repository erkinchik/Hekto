import React, { FC, useEffect } from "react";

import "./HomePage.scss";
import { MySlider, ProductList, ItemsList } from "../../components/index";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProducts } from "../../store/action-creators/productsAction";
import { fetchCategories} from "../../store/action-creators/categoryAction";
import { useDispatch } from "react-redux";

const HomePage: FC = () => {
  const dispatch = useDispatch();

  // const { products, loading, error } = useTypedSelector(
  //   (state) => state.products
  // );
    const { categories, loading, error } = useTypedSelector(
        (state) => state.categories
    );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    // dispatch(fe)
  }, []);

  return (
    <div className="wrapper">
      <section className="slider">
        <MySlider />
      </section>
      <section className="section2">
        {/*<ProductList />*/}
        <ItemsList list={categories} loading={loading} error={error} />
      </section>
        <section className="section2">
            {/*<ProductList />*/}
            {/*<ItemsList list={products} loading={loading} error={error} />*/}
        </section>
    </div>
  );
};

export default HomePage;
