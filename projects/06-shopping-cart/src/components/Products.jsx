import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import useCart from "../hooks/useCart";
/* eslint-disable react/prop-types */
const Products = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const handleAddToCartClick = (product) => {
    addToCart(product);
  };
  const handleRemoveFromCartClick = (product) => {
    removeFromCart(product);
  };
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: isProductInCart ? "red" : "#09f",
                  }}
                  type="button"
                  onClick={() =>
                    isProductInCart
                      ? handleRemoveFromCartClick(product)
                      : handleAddToCartClick(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Products;
