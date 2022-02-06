import React, {useEffect, useState} from "react";
import style from './Registration.module.css';
import {Link} from 'react-router-dom'


function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
        if (!re.test((String(e.target.value).toLowerCase()))) {
            setEmailError('Email некорректный')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError('Пароль должен содержать как минимум 8 символов')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
            } else {
                setPasswordError('')
            }
        }

    
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            default: break
        }
    }

    return (
        <div className={style.wrapper}>
            <main className={style.content}>
                <h1 className={style.title}>Вход</h1>
                <div className={style.form}>
                    <form>
                        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className={style.form__input_email} type="email" name="email"
                               placeholder="Введите email"/>
                        {(emailDirty && emailError) && <span className={style.field_email}>{emailError}</span>}

                        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} className={style.form__input_password} type="password" name="password"
                               placeholder="Введите пароль"/>

                        {(passwordDirty && passwordError) && <span className={style.field_password}>{passwordError}</span>}

                        <div className={style.form__checkbox_wrapper}>
                            <input className={style.form__input_checkbox} type="checkbox" id="checkbox" value="check"/>
                            <div className={style.form__checkbox_mark}> </div>
                            <label className={style.form__checkbox_label}>Я согласен получать обновления
                                на почту </label>
                        </div>
                        <Link to="/home">
                            <button disabled={!formValid} className={style.form__button}>Войти</button>
                        </Link>
                    </form>
                </div>
            </main>
        </div>

    )
}

export default Registration;
