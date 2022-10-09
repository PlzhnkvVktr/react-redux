import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CartItem } from '../CartItem/CartItem'
import { Loader } from '../common/Loader/Loader'
import style from './Cart.module.scss'

type Props = {}

export const Cart = (props: Props) => {
  const {cartList, loading, error, total} = useTypedSelector(state => state.cart)
  const {fetchCart} = useAction()
  const [owner, setOwner]: any = useState()

  useEffect(() => {
    setOwner(JSON.parse(localStorage.getItem('token')!).login)
    fetchCart()
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h1>Ошибка</h1>
  }

  return (
    <div className={style.cart__container}>
      <div className={style.product__list}>
        {
          cartList.map((c, idx) => 
          <CartItem
              key={idx}
              id={c.id}
              title={c.title}
              description={c.description}
              price={c.price}
          />
          )
        }
      </div>
      <div className={style.booking__container}>
        <p>Итого {total} рублей.</p>
      </div>
    </div>
  )
}