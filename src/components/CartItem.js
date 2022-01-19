import React from 'react';
const CartItem = (props) => {
  const { price, title, qty, img, id } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={img} alt={'product'} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}> {title}</div>
        <div style={{ color: '#777' }}> Rs. {price}</div>
        <div style={{ color: '#777' }}> Qty: {qty}</div>
        <div className="cart-item-actions">
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons.flaticon.com/png/512/3524/premium/3524388.png?token=exp=1642581432~hmac=ea2f00595721ac92937e597e4931be78"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons.flaticon.com/png/512/2801/premium/2801932.png?token=exp=1642581468~hmac=6dc8950249476fbe00132d3da7823dc9"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1642581496~hmac=fe8f5e478caa909df95cb073033c78ec"
            onClick={() => onDeleteProduct(id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
};
export default CartItem;
