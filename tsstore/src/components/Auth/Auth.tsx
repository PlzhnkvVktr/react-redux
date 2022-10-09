import React from 'react'
import { MyButton } from '../common/Button/MyButton';
import { MyInput } from '../common/MyInput/MyInput';
import style from './Auth.module.css'

type Props = {
    title: string;
    buttonText: string;
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit?: React.FormEventHandler<HTMLFormElement>;
    regHandleChange?: React.ChangeEventHandler<HTMLInputElement>;
    regHandleSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export const Auth = ({handleChange, handleSubmit, regHandleSubmit, regHandleChange, title, buttonText}: Props) => {
  return (
    <form className={style.form} onSubmit={handleSubmit || regHandleSubmit}>
      <h1>{title}</h1>
      <label>Логин</label>
      <MyInput type="text" name="login" onChange={handleChange || regHandleChange} />
      <label>Пароль</label>
      <MyInput type="password" name="password" onChange={handleChange || regHandleChange} />
      <MyButton formType="submit">{buttonText}</MyButton>
    </form>
  )
}