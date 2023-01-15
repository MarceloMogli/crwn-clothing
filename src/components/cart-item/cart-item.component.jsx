import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { prod, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={prod} />
      <div className="item-details">
        <span className="name">{prod}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
