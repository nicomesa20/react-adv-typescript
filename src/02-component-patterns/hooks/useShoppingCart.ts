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
      console.log(prevState);
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prevState;
        return rest;
      }

      return {
        ...prevState,
        [product.id]: {
          count,
          ...product,
        },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
