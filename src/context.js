import React from "react";
import { reducer } from "./reducer";

export const ShopContext = React.createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: ''
}

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = React.useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }

    value.removeFromBasket = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } })
    }

    value.handleBasketShow = () => {
        dispatch({ type: 'HANDLE_BASKET_SHOW' })
    }

    value.addToBasket = (item) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: item })
    }

    value.incQuantity = (itemId) => {
        dispatch({ type: 'INC_QUANTITY', payload: { id: itemId } })
    }

    value.decQuantity = (itemId) => {
        dispatch({ type: 'DEC_QUANTITY', payload: { id: itemId } })
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return <ShopContext.Provider value={value}>
        {children}

    </ShopContext.Provider>
}