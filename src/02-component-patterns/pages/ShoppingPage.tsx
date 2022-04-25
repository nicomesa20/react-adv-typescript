import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            className='bg-dark text-white'
            style={{ width: '100px' }}
            onChange={onProductCountChange}
            key={key}
            value={product.count}
          >
            <ProductImage className='custom-image' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
