import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

type ShoppingCartItem = { [key: string]: ProductInCart };

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((prevState) => {
      const productIntCart: ProductInCart = prevState[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(0, productIntCart.count + count) > 0) {
        productIntCart.count += count;
        return { ...prevState, [product.id]: productIntCart };
      }
      const { [product.id]: _, ...newState } = prevState;
      return newState;
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
