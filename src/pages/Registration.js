import React from "react";
import style from './Registration.module.css';
import {Link} from 'react-router-dom'


function Registration() {
    return (
        <div className={style.wrapper}>
            <main className={style.content}>
                <h1 className={style.title}>Вход</h1>
                <div className={style.form}>
                    <form>
                        <input className={style.form__input_email} type="email" name="email"
                               placeholder="Введите email"/>
                        <span className={style.field_email}>Поле обязательно для заполнения</span>
                        <input className={style.form__input_password} type="password" name="password"
                               placeholder="Введите пароль"/>
                        <span className={style.field_password}>Поле обязательно для заполнения</span>
                        <div className={style.form__checkbox_wrapper}>
                            <input className={style.form__input_checkbox} type="checkbox" id="checkbox" value="check"/>
                            <div className={style.form__checkbox_mark}> </div>
                            <label className={style.form__checkbox_label}>Я согласен получать обновления
                                на почту </label>
                        </div>
                        <span className={style.field_checkbox}>Поле обязательно для заполнения</span>
                        <Link to="/">
                            <button className={style.form__button}>Войти</button>
                        </Link>
                    </form>
                </div>
            </main>
        </div>

    )
}

export default Registration;
