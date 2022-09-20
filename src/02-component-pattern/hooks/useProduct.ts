import { useState, useEffect, useRef } from 'react'
import { InitialValues, onChangeArgs, ProductProps } from '../interfaces/interfaces'

interface useProductArgs {
    product: ProductProps
    onChange?: ( args: onChangeArgs ) => void
    value?: number
    initialValues?: InitialValues
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value )
    const isMounted = useRef(false)

    const increaseBy = (value: number) => {

        if ( initialValues?.maxCount && counter === initialValues?.maxCount ) return

        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue )

        onChange && onChange({ count: newValue, product })
    }

    useEffect(() => {
        if ( !isMounted.current ) return
        setCounter(value)
    }, [value])

    const reset = () => {
        setCounter( initialValues?.count || value )
    }

    useEffect(() => {
        isMounted.current = true
    }, [])

    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,

        increaseBy,
        reset,
    }
}