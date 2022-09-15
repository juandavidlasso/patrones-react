import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products'
import useShoppingCart from '../hooks/useShoppingCart'
import '../styles/custom-styles.css'

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {/* Forma 1 de Component Pattern */}
                {/* Componente basado en propiedades */}
                {/* <ProductCard product={product} className='bg-dark text-white'>
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title className='text-white text-bold' />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard> */}

                {
                    products.map( (product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className='bg-dark text-white'
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-white text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))
                }

                {/* Forma 2 de Component Pattern */}
                {/* Componente basado en hijos */}
                {/* <ProductCard product={product2} className='bg-dark text-white'>
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-white text-bold' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard> */}

            </div>

            <div className='shopping-cart'>
                { Object.entries(shoppingCart).map( ([key, product]) => (
                    <ProductCard
                        key={key}
                        product={product}
                        className='bg-dark text-white'
                        style={{ width: '100px' }}
                        value={ product.count }
                        onChange={ onProductCountChange }
                    >
                        <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                        <ProductButtons className='custom-buttons' />
                    </ProductCard>
                ))}
            </div>

        </div>
    );
}
 
export default ShoppingPage;