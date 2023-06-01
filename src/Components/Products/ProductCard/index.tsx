import React, { useEffect, useState } from 'react';
import './index.scss';

interface TProps {
  productName: string;
  limit: number;
}
const Product = ({ productName, limit }: TProps) => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    // setCount(count + 1);
    setCount((prevValue) => prevValue + 1);
  };

  const deleteCount = () => {
    // setCount(count + 1);
    setCount((prevValue) => prevValue - 1);
  };

  console.log('PRODUCT CARD RENDER');

  // useEffect(() => {
  //   console.log('COMPONENT DID MOUNT product');
  // }, []);

  return <div className='card_wrapper'>
    <span>{ productName }</span>
    <div className='button_section'>
        <button onClick={deleteCount} disabled={count === 0}>delete</button>
        <span>{count}</span>
        <button onClick={addCount} disabled={count >= limit}>add</button>
    </div>
    <div>
      <button>Добавить в корзину</button>
    </div>
  </div>
};

export const ProductCard = React.memo(Product);
