import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import './MenuList.module.css'
import style from './MenuList.module.css';
import {useSelector} from "react-redux";

function MenuList () {
    const mainMenu = useSelector((state) => state.counter.menu)
        return (
            <div className={style.wrapper_menu}>
                <main className={style.menu}>
                    { mainMenu.map((dish) => {
                        return (
                            <MenuItem
                                key = {dish.id}
                                id = {dish.id}
                                img = {dish.img}
                                alt = {dish.alt}
                                title = {dish.title}
                                description = {dish.description}
                                price = {dish.price}
                                scale = {dish.scale}/>
                        )
                    })}
                </main>
            </div>
        )
    }

    export default MenuList


//  class MenuList extends React.Component {
//     render() {
//         return (
//             <div className={style.wrapper_menu}>
//                 <main className={style.menu}>
//                     { dishes.map((dish) => {
//                         return (
//                             <MenuItem
//                                 key = {dish.id}
//                                 id = {dish.id}
//                                 img = {dish.img}
//                                 alt = {dish.alt}
//                                 title = {dish.title}
//                                 description = {dish.description}
//                                 price = {dish.price}
//                                 scale = {dish.scale}/>
//                                 )
//                     })}
//                 </main>
//             </div>
//         )
//     }
// }