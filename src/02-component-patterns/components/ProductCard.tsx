import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement, CSSProperties } from 'react';
import {
  InitialValues,
  ProductCartContextProps,
} from '../interfaces/interfaces';
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from '../interfaces/interfaces';

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCartContextProps) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          increaseBy,
          reset,
          product,
        })}
      </div>
    </Provider>
  );
};
