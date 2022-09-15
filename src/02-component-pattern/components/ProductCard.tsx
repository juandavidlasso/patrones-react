import { createContext, ReactElement } from 'react'
import { useProduct } from '../hooks/useProduct'
import { onChangeArgs, ProductContextProps, ProductProps } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

// Context
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface ProductCardProps {
    product: ProductProps
    children?: ReactElement | ReactElement[]
    className?: string
    style?: React.CSSProperties
    onChange?: ( args: onChangeArgs ) => void
    value?: number
}

export const ProductCard = ({children, product, className, style, onChange, value}: ProductCardProps) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value })

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product
            }}
        >
            <div
                className={ `${styles.productCard} ${ className }` }
                style={ style }
            >

                { children }

            </div>
        </Provider>
    );
}

