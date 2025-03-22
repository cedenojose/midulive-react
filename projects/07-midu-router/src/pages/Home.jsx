import Link from "../Link";

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Página de ejemplo para crear un React Router desde cero con Midu</p>
      <Link to={"/about"}>Ir a Sobre nosostros</Link>
    </>
  );
};
export default HomePage;
