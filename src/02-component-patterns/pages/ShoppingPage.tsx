import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: 'coffee-mug.png',
};

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
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title='Hola mundo' />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
