import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useReducer } from "react";
import { PRODUCTS } from "./components/productsData";
import { ShopState } from './components/context'
import reducer from "./components/reducer"
function App() {

  const [state, dispatch] = useReducer(reducer, {
    currentShop: [],
    currentProduct: PRODUCTS,
    value: {
      firstVal: 0,
      secondVal: 0
    },
  })
  const { currentShop } = state
  const handleShopping = (e, id) => {
    e.preventDefault();


    dispatch({
      type: "ADD_TO_BASKET",
      payload: id
    })
  };

  const hadelCounter = (changeValue, itemId) => {

    dispatch({
      type: "CHANGE_COUNTER",
      payload: {
        changeValue,
        itemId
      }
    })
  }
  const handelRemove = (itemId) => {


    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: itemId
    })

  }



  return (
    <ShopState.Provider value={{ state, dispatch, shopping: handleShopping }}>
      <Router>
        <Header productView={currentShop} hadelCounter={hadelCounter} handelRemove={handelRemove} />
        <Switch>
          <Route path="/" exact>
            <Home onClick={handleShopping} products={PRODUCTS} />
          </Route>
          <Route path="/shop">
            <Shop products={PRODUCTS} shopping={handleShopping} />
          </Route>
          <Route path="/detail/:id?">
            <Detail products={PRODUCTS} onClick={handleShopping} />
          </Route>
        </Switch>
      </Router>
    </ShopState.Provider>
  );
}

export default App;
