import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Filters, ShopWrapper, Wrapper } from "./StyledComponents";
import Product from './Product'
import Reducer from './reducer'
import { ShopState } from './context'
function Shop({ products }) {

  const { state, dispatch, shopping } = useContext(ShopState)
  const { currentProduct, value } = state

 
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
  return (
    <Wrapper>
      <Filters>
        <span>
          Filters <button onClick={handleRemoveFilters}>Remove All</button>
        </span>
        <span onClick={handleBestSellers}>Best Sellers</span>
        <span>Categories</span>
        <ul>
          {Cats.map((cat, v) => {
            return (
              <li onClick={() => handleFilterCat(cat)} key={v}>
                {cat}
              </li>
            );
          })}
        </ul>
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
