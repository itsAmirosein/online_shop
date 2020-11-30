import React, { useEffect, useState } from "react";
import { SidebarWrapper, CloseBtn } from "./StyledComponents";
import * as fa from "react-icons/fa";
import ProductView from "./ProductView";

function Sidebar({ onClick, showSidebar, productView,hadelCounter,handelRemove}) {
  const [products, setProducts] = useState(productView);
  
  useEffect(() => {
    setProducts(productView);
  }, [productView]);
  // const handleMinus = (id) => {
  //   if(count > 1){
  //     setCount((prevState) => prevState - 1);
  //   }else{
  //     const j = products.findIndex(item => item.id !== id);
  //     const v = products.splice(j,1);
  //     setProducts(v);
  //   }
  // };
  // const handlePlus = () => {

  //   setCount((prevState) => prevState + 1);
  // };
  const total =()=>{
    let totalPrice = 0;
     products.forEach(item=>{totalPrice+=item.counter*Math.floor(item.price / 2)})
   return totalPrice
  }


  return (
    <SidebarWrapper showSidebar={showSidebar}>
      <CloseBtn onClick={onClick}>
        <fa.FaTimes />
      </CloseBtn>
      {products
        ? products.map((product) => {
            return (
              <ProductView
                key={product.id}
                id={product.id}
                img={product.imageUrl}
                special={product.special}
                title={product.title}
                price={product.price}
                count={product.counter}
                closeSidebar={onClick}
                hadelCounter={hadelCounter}
                handelRemove={handelRemove}
              />
            );
          })
        : null}
      <div>Total : {total()}</div>
    </SidebarWrapper>
  );
}

export default Sidebar;
