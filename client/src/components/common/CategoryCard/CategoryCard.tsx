import React, { FC } from "react";

import './CategoryCard.scss'
import { ICategories } from "../../../types/categoryTypes";
import camera from "../../../assets/cam.png";
interface CategoryCardProps {
  category: ICategories;
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="category-card">
      <div className="category-image">
        <img src={camera} alt={category.name} />
      </div>
      <div className="category-text">
        <span className="category-name">{category.name}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
