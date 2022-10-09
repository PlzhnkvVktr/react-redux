import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.scss'

type Props = {}

export const Navbar = (props: Props) => {
  return (
        <nav className={style.navbar}>
            <Link to="/about">О сайте</Link>
            <Link to="/products">Посты</Link>
            <Link to="/cart">Корзина</Link>
        </nav>
  )
}
