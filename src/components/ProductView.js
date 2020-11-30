import React, { useContext } from "react";
import {
  ProductViewWrapper,
  InfoWrapper,
  ProductImg,
  ProductViewRemove,
  CounterWrapper,
  DiscountPrice,
} from "./StyledComponents";
import * as fa from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopState } from "./context";

function ProductView({ title, price, img, count, special, id, closeSidebar, hadelCounter,handelRemove }) {
  const discountPrice = Math.floor(price / 2);
  const {state} = useContext(ShopState)
  const {disabled} = state

  return (
    <ProductViewWrapper>
      <ProductViewRemove>
        <fa.FaTimes onClick={()=>handelRemove(id)}/>
      </ProductViewRemove>
      <Link to={`/detail/${id}`}>
        <ProductImg src={img} alt="" onClick={closeSidebar} />
      </Link>
      <InfoWrapper>
        <div>{title}</div>
        {!special && <span> {price}$</span>}
        {special && (
          <span>
            <DiscountPrice> {price}$</DiscountPrice> / {discountPrice}$
          </span>
        )}
      </InfoWrapper>
      <CounterWrapper>
        <fa.FaChevronLeft  onClick={() => hadelCounter('remove',id)} />
        <span>{count}</span>
        <fa.FaChevronRight onClick={() => hadelCounter('add',id)} />
      </CounterWrapper>
    </ProductViewWrapper>
  );
}

export default ProductView;
