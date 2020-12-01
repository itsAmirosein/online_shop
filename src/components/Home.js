import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import {
  BgWrapper,
  ShopNowWrapper,
  ShowNowText,
  ShowNowButton,
  ProductTitle,
  ProductContainer,
  SeeMore,
} from "./StyledComponents";

function Home({ onClick, products }) {
  const bestSellers = products.filter(
    (bestSellerProduct) => bestSellerProduct.special
  );
  return (
    <div>
      <BgWrapper>
        <ShopNowWrapper>
          <ShowNowText>Best Store In World</ShowNowText>
          <Link to='/shop'>
            <ShowNowButton>Shop now</ShowNowButton>
          </Link>
        </ShopNowWrapper>
      </BgWrapper>
      <ProductTitle>Best Sellers - 50% discount</ProductTitle>

      <ProductContainer>
        <Link to={"./shop"}>
        <SeeMore>see all</SeeMore>
        </Link>
        {bestSellers.splice(0, 8).map((product) => {
          return (
            <Link key={product.id} to={`/detail/${product.id}`}>
              <Product
                img={product.imageUrl}
                title={product.title}
                cat={product.cat}
                price={parseInt(product.price)}
                onClick={(e) => onClick(e, product.id)}
              />
            </Link>
          );
        })}
      </ProductContainer>
    </div>
  );
}

export default Home;
