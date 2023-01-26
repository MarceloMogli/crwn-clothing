import {Preview, PreviewContainer} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import React from "react";

const CategoryPreview = ({ title, products }) => {
  return (
    <PreviewContainer>
      <h2>
        <Link className="category-link" to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </PreviewContainer>
  );
};
export default CategoryPreview;
