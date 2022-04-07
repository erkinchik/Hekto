import React, { FC } from "react";

import "./ProductSort.scss";
import { ReactComponent as BlockGrid } from "../../../assets/blockGrid.svg";
import { ReactComponent as ListGrid } from "../../../assets/listGrid.svg";

interface IProductSortProps {
  results: number;
}

const ProductSort: FC<IProductSortProps> = ({ results }) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="sort-item-block">
      <div className="sort-text">
        <h3 className="sort-text__sort-title">Sort title</h3>
        <span className="sort-text__sort-subtitle">
          About {results} results
        </span>
      </div>
      <div className="selects-list">
        <div className="sort-by-block">
          <span>Sort By: </span>
          <select>
            <option className="selects-list__option" disabled selected hidden>
              Best Match
            </option>
            {arr.map((item) => {
              return (
                <option
                  key={item}
                  value={item}
                  className="selects-list__option"
                >
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="view-block">
          <span>View: </span>
          <button className="block-grid">
            <BlockGrid width="15px" height="15px" />
          </button>
          <button className="list-grid">
            <ListGrid width="15px" height="15px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSort;
