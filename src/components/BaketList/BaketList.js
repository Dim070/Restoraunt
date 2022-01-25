import style from "./BaketList.module.css";
import BasketItem from "../BasketItem/BasketItem";
import {useSelector} from "react-redux";


const BasketList = () => {
    const basketMenu = useSelector((state) => state.counter.basket)
    return (
        <ul className={style.product_basket__list}>
            {basketMenu.map(item => (
                <BasketItem key={item.id}
                            id={item.id}
                            img={item.img}
                            alt={item.alt}
                            title={item.title}
                            price={item.price}
                />
            ))}
        </ul>
    )
}
export default BasketList