import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {/* Forma 1 de Component Pattern */}
                {/* Componente basado en propiedades */}
                <ProductCard product={product} className='bg-dark text-white'>
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title className='text-white text-bold' />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>

                {/* Forma 2 de Component Pattern */}
                {/* Componente basado en hijos */}
                <ProductCard product={product} className='bg-dark text-white'>
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-white text-bold' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>


                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
                </ProductCard>
            </div>
        </div>
    );
}
 
export default ShoppingPage;