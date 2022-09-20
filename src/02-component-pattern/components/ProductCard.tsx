import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { InitialValues, onChangeArgs, ProductCardHandlers, ProductContextProps, ProductProps } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

// Context
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface ProductCardProps {
    product: ProductProps
    // children?: ReactElement | ReactElement[]
    children: ( args: ProductCardHandlers ) => JSX.Element
    className?: string
    style?: React.CSSProperties
    onChange?: ( args: onChangeArgs ) => void
    value?: number
    initialValues?: InitialValues
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: ProductCardProps) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues })

    return (
        <Provider
            value={{
                counter,
                maxCount,
                increaseBy,
                product
            }}
        >
            <div
                className={ `${styles.productCard} ${ className }` }
                style={ style }
            >

                { children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset
                }) }

            </div>
        </Provider>
    );
}

