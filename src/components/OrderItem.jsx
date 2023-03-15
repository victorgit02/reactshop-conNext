import React, { useContext } from 'react';
import Image from 'next/image';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };
  return (
    <div className={styles.OrderItem}>
      {product && (
        <>
          
            <figure>{product.images && <img src={product?.images[0]} width={50} height={60} alt={product.title} />}</figure>
        

          <p>{product.title}</p>
          <p>${product.price}</p>
          <Image src={close} alt="close" onClick={() => handleRemove(product)} />
        </>
      )}
    </div>
  );
};

export default OrderItem;
