import React from 'react'
import style from '../styles/styles.module.scss'

// type Props = {
//   type: string;
//   name: string;
//   action?: React.ChangeEventHandler<HTMLInputElement>
// }

interface MyInputProps {
  type: string;
  name: string;
  placeholder?: string;
  onChange?: (event: any) => void;
}

export const MyInput: React.FC<MyInputProps> = ({placeholder, type, name, onChange}) => {
  return (
    <input placeholder={placeholder} className={style.myInput} type={type} name={name} onChange={onChange} />
  )
}
