import React, { FC } from "react";

import './CategoryCard.scss'
import { ICategory } from "../../../types/categoryTypes";
import camera from "../../../assets/cam.png";
interface CategoryCardProps {
  category: ICategory;
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
