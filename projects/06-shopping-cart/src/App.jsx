import { useState } from "react";
import Products from "./components/Products";
import { products as InitialState } from "./mocks/products.json";
import Header from "./components/Header";
import useFilters from "./hooks/useFilters";
import Footer from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import Cart from "./components/Cart";
import { CartProvider } from "./context/Cart";

function App() {
  const [products, setProducts] = useState(InitialState);

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
