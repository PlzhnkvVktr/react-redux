import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import { MyButton } from '../common/Button/MyButton';
import { Navbar } from '../Navbar/Navbar'
import style from './Header.module.scss'

type Props = {
  owner: {
    login: string,
    password: string
  }
}

export const Header: React.FC<Props> = ({owner}) => {
  const {outUser} = useAction()
  const out: React.MouseEventHandler<HTMLButtonElement> = () => {
    outUser(owner)
  }

  return (
    <header className={style.header}>
        {
          owner
          ?
          <div className={style.user__info}>
            <h3 className={style.header__title}>{owner.login}</h3>
            <MyButton action={out}>
              Выйти
            </MyButton>
          </div>
          :
          <div className={style.user__info}>
            <h3>Вы не авторизованы</h3>
            <MyButton>
              <Link to="/login">Войти</Link>
            </MyButton>
          </div>
        }
        <Navbar />
    </header>
  )
}