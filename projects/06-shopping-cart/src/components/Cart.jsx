import "./Cart.css";
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import useCart from "../hooks/useCart";

// eslint-disable-next-line react/prop-types
const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Quantity: {quantity}</small>
        <button
          type="button"
          onClick={addToCart}
        >
          +
        </button>
      </footer>
    </li>
  );
};

const Cart = () => {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  return (
    <>
      <label
        className="cart-button"
        htmlFor={cartCheckboxId}
      >
        <CartIcon />
      </label>
      <input
        type="checkbox"
        id={cartCheckboxId}
        hidden
      />
      <aside className="cart">
        <ul>
          {cart.map((product) => {
            return (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            );
          })}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
export default Cart;
