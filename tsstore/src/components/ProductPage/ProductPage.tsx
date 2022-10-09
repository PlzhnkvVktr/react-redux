import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Loader } from '../common/Loader/Loader';

type Props = {

}

export const ProductPage = ({}: Props) => {
  const params = useParams()
  const {currentProduct, loading, error} = useTypedSelector(state => state.currentProduct)
  const {fetchCurrentProduct, addToCart} = useAction()
  const [buttonDisabled, setButtonDisablet]: any = useState(false)

  useEffect(() => {
    fetchCurrentProduct(params.id)
  }, [])

  const addProduct = () => {
    addToCart(currentProduct)
    setButtonDisablet(true)
  }
  
  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h1>Не удалось получить информацию о продукте</h1>
  }

  return (
    <div>
        <h3>{currentProduct.title}</h3>
        <p>{currentProduct.description}</p>
        <p>{currentProduct.price} рублей</p>
        <button onClick={addProduct} disabled={buttonDisabled}>Добавить</button>
    </div>
  )
}