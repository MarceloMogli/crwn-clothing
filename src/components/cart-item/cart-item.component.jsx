import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { prod, quantity } = cartItem;
  return (
    <div>
      <h2>{prod}</h2>
      <span>{quantity}</span>
    </div>
  );
};
export default CartItem;
