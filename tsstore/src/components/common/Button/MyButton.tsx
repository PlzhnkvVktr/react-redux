import React from 'react'
import { Dispatch } from 'redux'
import { CartAction } from '../../../types/cart'
import style from '../styles/styles.module.scss'

type Props = {
    children: React.ReactNode
    action?: React.MouseEventHandler<HTMLButtonElement>
    formType?: string
}

export const MyButton = ({children, action}: Props) => {
  return (
    <button onClick={action} className={`${style.custom__btn} ${style.btn}`}><span>{children}</span></button>
  )
}