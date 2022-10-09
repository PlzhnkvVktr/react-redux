import React, { useEffect, useState } from 'react'
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Loader } from '../common/Loader/Loader'
import { MyInput } from '../common/MyInput/MyInput'
import { Product } from '../Product/Product'
import style from './Main.module.scss'

export const Main: React.FC = () => {
    const {products, error, loading, searchProductName}  = useTypedSelector(state => state.product)
    const {fetchProducts} = useAction()
    const [valueInput, setValueInput] = useState<string>(searchProductName)
    useEffect(() => {
        fetchProducts()
    }, [])

    const filteredProducts = products.filter(e => 
		e.title.toLowerCase().includes(valueInput.toLowerCase())
	)

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <h1>ошибка</h1>
    }

    return (
        <main className={style.main}>
            <MyInput
                name="search"
				type="text" 
				placeholder="Введите название"
				onChange={(e) => setValueInput(e.target.value)}
			/>
            <div className={style.container}>
                {
                    (valueInput.length === 0)
                    ?
                    products.map((c, idx) => 
                        <Product 
                            key={idx}
                            id={c.id}
                            title={c.title}
                        />
                        )
                        :
                    filteredProducts.map((c, idx) => 
                        <Product 
                            key={idx}
                            id={c.id}
                            title={c.title}
                        />
                    )
                }  
            </div>
            
        </main>
    )
}