import React from 'react'
import { useAction } from '../../hooks/useAction';
import style from '../Cart/Cart.module.scss'
import { MyButton } from '../common/Button/MyButton';

type Props = {
    id: any
    title?: any
    description?: any
    price?: any
}

export const CartItem: React.FC<Props> = ({id, title, description, price}) => {

  const {removeFromCart} = useAction()
  

  return (
    <div className={style.cartItem__container}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price} рублей</p>
        <button onClick={() => removeFromCart(id)}>Удалить</button>
    </div>
  )
}