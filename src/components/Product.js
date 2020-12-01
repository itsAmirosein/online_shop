import React from "react";
import { ProductWrapper, CartButton } from "./StyledComponents";

function Product({ img, onClick,title, cat,price }) {
  return (
    <ProductWrapper>
      <img src={img} alt="" />
      <CartButton onClick={(e) => onClick(e)}>Add to Cart</CartButton>
      <span>title: {title}</span>
      <span>category: {cat}</span>
      <span>price: {price} $</span>
    </ProductWrapper>
  );
}

export default Product;
