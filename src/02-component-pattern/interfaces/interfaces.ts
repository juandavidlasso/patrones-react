import { ProductButtonsProps } from "../components/ProductButtons"
import { ProductCardProps } from "../components/ProductCard"
import { ProductImageProps } from "../components/ProductImage"
import { ProductTitleProps } from "../components/ProductTitle"

export interface ProductProps {
    id: string
    title: string
    img?: string
}

export interface ProductContextProps {
    counter: number
    increaseBy: (value: number) => void
    product: ProductProps
    maxCount?: number
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ): JSX.Element
    Title: (Props: ProductTitleProps) => JSX.Element
    Image: (Props: ProductImageProps) => JSX.Element
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}


export interface onChangeArgs {
    product: ProductProps
    count: number
}


export interface ProductInCart extends ProductProps {
    count: number
}


export interface InitialValues {
    count?: number
    maxCount?: number
}


export interface ProductCardHandlers {
    count: number
    isMaxCountReached: boolean
    maxCount?: number
    product: ProductProps
    
    increaseBy: ( value: number ) => void
    reset: () => void
}

