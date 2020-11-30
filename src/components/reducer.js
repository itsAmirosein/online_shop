import React from 'react'
import { PRODUCTS } from './productsData'
export default function Reducer(state, action) {
  

    return ACTION[action.type](state, action.payload)
}
const ACTION = {
    "REMOVE_FILTERPRICE": handelRomovePriceFilter,
    "PRICE_FILTER": handelPriceFilter,
    "SET_FIRST_VAL": handelFirstVal,
    "SET_SECOND_VAL": handelSecondVal,
    "BEST_SELERS": handelBestSellers,
    "REMOVE_FILTERS": handelRemoveFilter,
    "SET_CATEGORY": handlSetcategories,
    "ADD_TO_BASKET": handelAddValue,
    "CHANGE_COUNTER": handelChangeCounter,
    "REMOVE_FROM_BASKET": handelRemoveValue,



}
function handelRomovePriceFilter(state, payload) {
    return {
        ...state,
        currentProduct: PRODUCTS
    }
}
function handelPriceFilter(state, payload) {
    const { firstVal, secondVal } = state.value
    const priceFilterCopyFirst = [...PRODUCTS];
    const priceFilterFirst = priceFilterCopyFirst.filter(
        (product) =>
            parseInt(product.price) > parseInt(firstVal) &&
            parseInt(product.price) < parseInt(secondVal)
    )
    return {
        ...state,
        currentProduct: priceFilterFirst
    }
}
function handelFirstVal(state, payload) {
    const { secondVal } = state.value
    return {
        ...state,
        value: {
            firstVal: payload,
            secondVal: secondVal
        }

    }
}
function handelSecondVal(state, payload) {
    const { firstVal } = state.value
    return {
        ...state,
        value: {
            firstVal: firstVal,
            secondVal: payload
        }
    }
}
function handelBestSellers(state, payload) {
    const p = [...PRODUCTS];
    const currentP = p.filter((product) => product.special)
    return {
        ...state,
        currentProduct: currentP
    }
}
function handelRemoveFilter(state, payload) {
    return {
        ...state,
        currentProduct: PRODUCTS
    }
}
function handlSetcategories(state, payload) {
    const productsCopy = [...PRODUCTS];
    const currentCat = productsCopy.filter(
        (product) => product.category === payload)
    return {
        ...state,
        currentProduct: currentCat
    }
}
function handelAddValue(state, payload) {
    const { currentShop } = state
    const FoundedData = PRODUCTS.find((product) => product.id === payload);
    const copyCurrentShop = [...currentShop]


    if (currentShop.length > 0) {
        const currentShopItem = { ...currentShop.find(item => item.id === payload) }
        if (Object.getOwnPropertyNames(currentShopItem).length > 0) {
            const itemIndex = currentShop.findIndex(item => item.id === payload)
            ++currentShopItem.counter;
            copyCurrentShop[itemIndex] = currentShopItem
            return {
                ...state,
                currentShop: copyCurrentShop
            }
        }
        else {
            copyCurrentShop.push(FoundedData)
            return {
                ...state,
                currentShop: copyCurrentShop
            }
        }
    }
    else {

        copyCurrentShop.push(FoundedData)
        return {
            ...state,
            currentShop: copyCurrentShop
        }
    }
}
function handelChangeCounter(state, payload) {
    const {currentShop} = state
    const { changeValue, itemId } = payload
    const copyCurrentShop = [...currentShop]
    const item = { ...currentShop.find(item => item.id === itemId) }
    if (changeValue === 'remove' && item.counter > 1) {

        const itemIndex = currentShop.findIndex(item => item.id === itemId)
        --item.counter
        copyCurrentShop[itemIndex] = item
        return {
            ...state,
            currentShop: copyCurrentShop
        }



    }
    else if(changeValue==="remove"&&item.counter<=1){
        return{
            ...state,
           
        }
    }
    else if (changeValue === 'add') {

        const itemIndex = currentShop.findIndex(item => item.id === itemId)
        ++item.counter
        copyCurrentShop[itemIndex] = item
        return {
            ...state,
            currentShop: copyCurrentShop,
        }

    }

}

function handelRemoveValue(state,payload){
    const {currentShop} = state
    let copyCurrentShop = [...currentShop]
            copyCurrentShop = copyCurrentShop.filter(item => item.id !==payload)
            return {
                ...state,
                currentShop: copyCurrentShop
            }
}


