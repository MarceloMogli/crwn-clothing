import {ItemDetails, CartItemContainer} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { prod, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={prod} />
      <ItemDetails>
        <span className="name">{prod}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
