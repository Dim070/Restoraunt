import { createSlice } from "@reduxjs/toolkit";
import dishes from "../../components/dishes";
// import {useSelector} from "react-redux";

const initialState = {
    menu: dishes,
    basket: [],
    counterItems: 0,
    sumPrice: 0,
    price: 0
}

export const counterSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {

        addInBasket: (state, action) => {
            state.menu.forEach(element => {
                if (element.id === action.payload) {
                    state.basket.push(element)
                    }
            })
        },

        delInBasket: (state, action) => {
            state.basket = state.basket.filter(function(item) {
                console.log(action.payload,'action.payload')
                return item.id !== action.payload
            })
           // return state.basket.filter(item => item.id !== action.payload)
        },

        counterProducts: (state) => {
            state.counterItems = state.basket.length
        },

        sumProducts: (state ) => {
            let sumPrice = state.basket.reduce((prev, cur) => {
                return {price: prev.price + cur.price}
            }, initialState)
            state.sumPrice = sumPrice.price
        }
    },

})


export const { addInBasket, delInBasket, counterProducts, sumProducts } = counterSlice.actions;

export default counterSlice.reducer;

