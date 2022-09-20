import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products'
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            
            {/* Forma 1 de Component Pattern */}
            {/* Componente basado en propiedades */}
            {/* <ProductCard product={product} className='bg-dark text-white'>
                <ProductCard.Image className='custom-image' />
                <ProductCard.Title className='text-white text-bold' />
                <ProductCard.Buttons className='custom-buttons' />
            </ProductCard> */}

            <ProductCard
                key={product.id}
                product={product}
                className='bg-dark text-white'
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, count, maxCount, isMaxCountReached, increaseBy }) => (
                        <>
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-white text-bold' />
                            <ProductButtons className='custom-buttons' />

                            <button type='button' onClick={ reset }>Reset</button>
                            <button type='button' onClick={ () => increaseBy(-2) }> -2 </button>
                            {
                                (!isMaxCountReached &&  <button type='button' onClick={ () => increaseBy(+2) }> +2 </button> )
                            }
                            <span>{count} - {maxCount}</span>
                        </>
                    )
                }
                </ProductCard>

            {/* Forma 2 de Component Pattern */}
            {/* Componente basado en hijos */}
            {/* <ProductCard product={product2} className='bg-dark text-white'>
                <ProductImage className='custom-image' />
                <ProductTitle className='text-white text-bold' />
                <ProductButtons className='custom-buttons' />
            </ProductCard> */}

        </div>
    );
}
 
export default ShoppingPage;