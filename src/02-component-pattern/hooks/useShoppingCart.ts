import { useState } from "react"
import { ProductInCart, ProductProps } from "../interfaces/interfaces"

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number, product: ProductProps}) => {
        setShoppingCart( prevShoppingCart => {

            const productInCart: ProductInCart = prevShoppingCart[product.id] || { ...product, count: 0 }

            if ( Math.max( productInCart.count + count, 0) > 0 ) {
                productInCart.count += count
                return {
                    ...prevShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest } = prevShoppingCart
            return rest
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}

export default useShoppingCart

