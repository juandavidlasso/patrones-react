import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

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
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={ 'Hola Mundo' } />
                    <ProductCard.Buttons />
                </ProductCard>

                {/* Forma 2 de Component Pattern */}
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    );
}
 
export default ShoppingPage;