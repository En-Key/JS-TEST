import React, { useEffect, useState } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/products';

interface TProps {
  productName: string;
  limit: number;
}
const Product = ({ productName }: TProps) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const addCount = () => {
    // setCount(count + 1);
    setCount((prevValue) => prevValue + 1);
  };

  const deleteCount = () => {
    // setCount(count + 1);
    setCount((prevValue) => prevValue - 1);
  };

  const addProductHandler = () => {
    dispatch(addProduct({ name: productName, count }));
  };
  // console.log('PRODUCT CARD RENDER');

  // useEffect(() => {
  //   console.log('COMPONENT DID MOUNT product');
  // }, []);

  return <div className='card_wrapper'>
    <span>{ productName }</span>
    <div className='button_section'>
        <button onClick={deleteCount} disabled={count === 0}>delete</button>
        <span>{count}</span>
        <button onClick={addCount} >add</button>
    </div>
    <div>
      <button onClick={addProductHandler}>Добавить в корзину</button>
    </div>
  </div>
};

export const ProductCard = React.memo(Product);
