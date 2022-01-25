import React from "react";
import style from './MenuItem.module.css';
import {useDispatch} from "react-redux";
import {addInBasket, counterProducts, sumProducts} from "../../app/reducers/counter"



function MenuItem (props) {
    const dispatch = useDispatch();
    function reducersCounter () {
        dispatch(addInBasket(props.id))
        dispatch(counterProducts())
        dispatch(sumProducts(props.price))
    }
        return (
            <div className={style.item}>
                <div className={style.item__img}>
                    <img src={props.img} alt={props.alt}/>
                </div>
                <div className={style.item__title}>{props.title}</div>
                <div className={style.item__description}>{props.description}
                </div>
                <div className={style.item__price}>{props.price}
                    <div className={style.item__price_scale}>/ {props.scale}</div>
                </div>
                <div >
                    <button onClick={()=> reducersCounter()} className={style.btn_add}>+</button>
                </div>
            </div>
        )
    }

    export default MenuItem
