import React, { FC } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import ProductCard from "../PorductCard/ProductCard";
import Spinner from "../Spinner/Spinner";
import {useHistory} from "react-router";
import {PRODUCT_DETAILS} from "../../../utils/paths";

interface ItemsListProps {
  list: any[];
  loading: boolean;
  error: string | null | object;
}

const ItemsList: FC<ItemsListProps> = ({ list, loading, error }) => {
  const history = useHistory()

  if (loading) {
    return <Spinner/>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="items-list">
      {list.map((item) => {
        return item.hasOwnProperty("category_id") ? (
          <ProductCard
            key={item.id}
            product={item}
            // onClick={(id) => history.push(PRODUCT_DETAILS)}
          />
        ) : (
          <CategoryCard key={item.id} category={item} />
        );
      })}
    </div>
  );
};

export default ItemsList;
