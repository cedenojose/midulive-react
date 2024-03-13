import { useContext } from "react";
import { CartContext } from "../context/Cart";

const useCart = () => {
  const context = useContext(CartContext);

  /*
    =================Buena practica=================
    ===Se debe verificar que el context no esta definido
    ===En caso de ser asi, quiere decir que se esta utilizando
    ======en donde no se debe ya que no esta definido el context
*/
  if (context === undefined) {
    throw new Error("userCart must be used within a CartProvider");
  }

  return context;
};
export default useCart;
