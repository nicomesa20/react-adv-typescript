import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
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
        <ProductCard
          key={product.id}
          product={product}
          className='bg-dark text-white'
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, count, increaseBy, isMaxCountReached }) => (
            <>
              <ProductImage className='custom-image' />
              <ProductTitle className='text-bold' />
              <ProductButtons className='custom-buttons' />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(+2)}>+2</button>
              )}
              <span>count: {count}</span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
