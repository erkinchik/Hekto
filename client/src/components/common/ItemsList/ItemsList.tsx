import React, { FC } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import ProductCard from "../PorductCard/ProductCard";
import Spinner from "../Spinner/Spinner";

interface ItemsListProps {
  list: any[];
  loading: boolean;
  error: string | null | object;
}

const ItemsList: FC<ItemsListProps> = ({ list, loading, error }) => {
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
            onClick={(id) => console.log(id)}
          />
        ) : (
          <CategoryCard key={item.id} category={item} />
        );
      })}
    </div>
  );
};

export default ItemsList;
