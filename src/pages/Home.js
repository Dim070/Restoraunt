import React from "react";
import style from './Home.module.css';
import {Link} from 'react-router-dom'
import logoBasket from '../img/header/Vector.png'
import  MenuList from '../components/MenuList/MenuList'
import {useSelector} from "react-redux";


function Home() {
    const counterBasket = useSelector((state) => state.counter.counterItems)
    const totalPrice = useSelector((state) => state.counter.sumPrice)

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <header className={style.header}>
                    <div className={style.title}>Наша продукция</div>
                    <div className={style.navigation}>
                        <div className={style.choise}>
                            <div className={style.products}>количество товаров: {counterBasket}</div>
                            <div className={style.price}>на сумму: {totalPrice} </div>
                        </div>
                        <Link to="/basket">
                            <button className={style.btn_basket}>
                                <img src={logoBasket} alt={'basket'}/>
                            </button>
                        </Link>
                    </div>
                </header>
                <MenuList/>
                <MenuList/>
            </div>
        </div>
    );
}

export default Home;
