import Link from "./Link";

const Page404 = () => {
  return (
    <>
      <div>
        <h1>404</h1>
        <img
          src="https://midu.dev/images/this-is-fine-404.gif"
          alt="Gif del perro de This is fine"
        />
      </div>
      <Link to={"/"}>Volver a la Home</Link>
    </>
  );
};
export default Page404;
