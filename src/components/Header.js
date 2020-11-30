import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { HeaderWrapper, ShoppingBtn, ShoppingSpan } from "./StyledComponents";
import * as fa from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ productView, hadelCounter, handelRemove }) {
  const [showSidebar, setShowSidebar] = useState(false);


  const handlehide = () => {
    setShowSidebar(false);
  }
  return (
    <HeaderWrapper>
      <fa.FaBars />
      <Link to="/">header</Link>
      <ShoppingBtn>
        <fa.FaShoppingCart onClick={() => setShowSidebar(true)} />
        {productView.length !== 0 && <ShoppingSpan>{productView.length}</ShoppingSpan>}
      </ShoppingBtn>
      <Sidebar
        onClick={handlehide}
        showSidebar={showSidebar}
        productView={productView}
        hadelCounter={hadelCounter}
        handelRemove={handelRemove}
      />
    </HeaderWrapper>
  );
}

export default Header;
