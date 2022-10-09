import React, {useState} from 'react'
import { useAction } from '../../hooks/useAction';
import { Auth } from '../Auth/Auth';
import { MyButton } from '../common/Button/MyButton';

export const Login: React.FC = () => {
  
  const {regUser, authUser} = useAction()
  const [formAuth, setFormAuth] = useState(false)
  const [formReg, setFormReg] = useState(false)
  const [newUser, setNewUser] = useState({
		login: '',
		password: '',
    auth: false,
    cart: []
	})
  const [userAuth, setUser] = useState({
    login: '',
    password: ''
	})
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (v) => {
    setNewUser({ ...newUser, [v.target.name]: v.target.value });
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    regUser(newUser)
  }

  const regHandleChange: React.ChangeEventHandler<HTMLInputElement> = (v) => {
    setUser({ ...userAuth, [v.target.name]: v.target.value });
  }
  const regHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    authUser(userAuth)
  }

  const clickAuth: React.MouseEventHandler<HTMLButtonElement> = () => {
    setFormAuth(true)
    setFormReg(false)
  }
  const clickReg: React.MouseEventHandler<HTMLButtonElement> = () => {
    setFormAuth(false)
    setFormReg(true)
  }

  return (
    <div>
      <MyButton action={clickAuth}>Регистрация</MyButton>
      <MyButton action={clickReg}>Авторизация</MyButton>
      {
        formAuth 
        &&
        <Auth 
          title={'Регистрация'}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText={'Зарегистрироваться'}
        />
      }
      {
        formReg 
        &&
        <Auth 
          title={'Авторизация'}
          regHandleSubmit={regHandleSubmit}
          regHandleChange={regHandleChange}
          buttonText={'Войти'}
        />
      }
    </div>
  )
}