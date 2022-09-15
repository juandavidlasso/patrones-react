import { useState } from "react"
import { ProductInCart, ProductProps } from "../interfaces/interfaces"

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number, product: ProductProps}) => {
        setShoppingCart( prevShoppingCart => {

            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = prevShoppingCart
                return rest
            }

            return {
                ...prevShoppingCart,
                [product.id]: { ...product, count }
            }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}

export default useShoppingCart

