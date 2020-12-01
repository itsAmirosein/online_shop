import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import {
  Filters,
  ShopWrapper,
  Wrapper,
  Icon,
  Menu,
  MenuContainer,
  ClearFilters
} from "./StyledComponents";
import Product from './Product'
import { ShopState } from './context'
import * as gr from "react-icons/gr";



function Shop({ products }) {

  const { state, dispatch, shopping } = useContext(ShopState)
  const { toggleCat, currentProduct, value } = state


  const Cats = _.uniq(products.map((product) => product.category));

  useEffect(() => {
    if (
      parseInt(value.firstVal) > 0 &&
      parseInt(value.secondVal) > 0 &&
      parseInt(value.firstVal) < parseInt(value.secondVal)
    ) {
      dispatch({
        type: 'PRICE_FILTER',
      })
    }
    else {
      dispatch({
        type: 'REMOVE_FILTERPRICE',

      })
    }
  }, [value]);

  const handleFirstAmount = (e) => {
    dispatch({
      type: "SET_FIRST_VAL",
      payload: e.target.value

    })
  };

  const handleSecondAmount = (e) => {
    dispatch({
      type: "SET_SECOND_VAL",
      payload: e.target.value

    })
  };

  const handleBestSellers = () => {

    dispatch({
      type: 'BEST_SELERS'
    })

  };

  const handleRemoveFilters = () => {
    dispatch({
      type: "REMOVE_FILTERS"
    })
  };
  const handleFilterCat = (cat) => {

    dispatch({
      type: 'SET_CATEGORY',
      payload: cat
    })
  };

  function handelShowCategories() {
    dispatch({
      type: "TOGGLE_CATEGORIES"
    })
  }

  return (
    <Wrapper>
      <Filters>
        <span>
          Filters    <ClearFilters onClick={handleRemoveFilters}><gr.GrTrash /></ClearFilters>
        </span>
        <span onClick={handleBestSellers}>Best Sellers</span>
        <span onClick={handelShowCategories}>Categories <Icon isoppened={toggleCat}> <gr.GrDown /></Icon></span>

        <MenuContainer isoppened={toggleCat}>
          {Cats.map((cat, v) => {
            return (
              <Menu onClick={() => handleFilterCat(cat)} key={v}>
                {cat}
              </Menu>
            );
          })}
        </MenuContainer>

        <span>
          <span>Price</span>
          <div>
            from
            <input
              type="number"
              onChange={handleFirstAmount}
              value={value.firstVal}
            />
            to
            <input
              type="number"
              onChange={handleSecondAmount}
              value={value.secondVal}
            />
            $
          </div>
        </span>
      </Filters>
      <ShopWrapper>
        {currentProduct.map((product) => {
          return (
            <Link key={product.id} to={`/detail/${product.id}`}>
              <Product
                img={product.imageUrl}
                price={parseInt(product.price)}
                title={product.title}
                cat={product.category}
                onClick={(e) => shopping(e, product.id)}
              />
            </Link>
          );
        })}
      </ShopWrapper>
    </Wrapper>
  );
}

export default Shop;
