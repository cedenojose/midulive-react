import React from "react";
import { createRoot } from "react-dom/client";
import Calculator from "./Calculator";

const app = document.getElementById("app");
if (!app) {
  throw new Error('Elemento con ID "app" no encontrado');
}
createRoot(app).render(<Calculator />);
