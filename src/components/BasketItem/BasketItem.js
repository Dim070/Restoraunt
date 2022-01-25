import style from "./BasketItem.module.css";
import {useDispatch} from "react-redux";
import {delInBasket, counterProducts, sumProducts} from "../../app/reducers/counter";

const BasketItem = (props) => {
    const dispatch = useDispatch ()
    function reducersCounter () {
        dispatch(delInBasket(props.id))
        dispatch(counterProducts())
        dispatch(sumProducts())
    }
        return (
            <li className={style.product_basket__list__item}>
                <img className={style.menu_item__img} src={props.img} alt={props.alt}/>
                <div className={style.menu_item__name}>{props.title}</div>
                <div className={style.menu_item__price}>{props.price}</div>
                <button onClick={() => reducersCounter()} className={style.menu_item__del}>x</button>
            </li>
        )
    }

export default BasketItem