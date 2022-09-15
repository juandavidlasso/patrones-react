import { useState, useEffect } from 'react'
import { onChangeArgs, ProductProps } from '../interfaces/interfaces'

interface useProductArgs {
    product: ProductProps
    onChange?: ( args: onChangeArgs ) => void
    value?: number
}

export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {

    const [counter, setCounter] = useState(value)

    const increaseBy = (value: number) => {

        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue )

        onChange && onChange({ count: newValue, product })
    }

    useEffect(() => {
        setCounter(value)
    }, [value])

    return {
        counter,
        increaseBy
    }
}