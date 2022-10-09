import React from 'react'
import {useNavigate } from 'react-router-dom';
import style from '../Main/Main.module.scss'

type Props = {
    id: number;
    title: string;
}

export const Product: React.FC<Props> = ({id, title}) => {
  const router = useNavigate()
  
  return (
    <div  
      className={style.product__item}
      onClick={() => router(`/products/` + id)}
    >
        <img src="https://technodizel.ru/upload/iblock/6ba/6ba0ba10e0ddee0a53da3573d67813ac.png" alt="" />
        <h3 >{title}</h3>
    </div>
  )
}