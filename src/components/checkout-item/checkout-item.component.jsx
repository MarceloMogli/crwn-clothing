import {CheckOutItemContainer, RemoveButton, Quantity, BaseSpan, ImageContainer, Arrow, Value} from "./checkout-item.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ cartItem }) => {
  const { prod, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${prod}`} />
      </ImageContainer>
      <BaseSpan className="name">{prod}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value className="value">{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan className="price">${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>
  );
};
export default CheckOutItem;
