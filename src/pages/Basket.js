import React from "react";
import style from './Basket.module.css';
import BasketList from "../components/BaketList/BaketList";
import {useSelector} from "react-redux";



function Basket () {
    const upPrice = useSelector((state) => state.counter.sumPrice)

    return (
        <div className={style.conteiner}>
            <div className={style.wrapper}>
                <main className={style.product_basket}>
                    <div className={style.product_basket__title}>Корзина с выбранными товарами</div>
                    <BasketList/>
                </main>
                <footer className={style.footer}>
                    <div className={style.footer_container}>
                        <div className={style.footer__title}>Заказ на сумму:
                            <div className={style.footer__title_price}>{upPrice}<span>₽</span></div>
                        </div>
                        <button className={style.footer__order} type="button">Оформить заказ</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Basket;