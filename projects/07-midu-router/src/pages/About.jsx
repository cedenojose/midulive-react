/* eslint-disable react/prop-types */
import Link from "../Link";

const i18n = {
  es: {
    title: "Acerca de nosotros",
    description:
      "¡Hola! estoy probando la página About y creando un clon de React Router siguiendo a Midu",
    button: "Ir a la Home",
  },
  en: {
    title: "About us",
    description:
      "Hello! I'm testing the About page and creating a React Router clone following Midu",
    button: "Go to Home",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

const AboutPage = ({ routeParams }) => {
  const i18n = useI18n(routeParams?.lang ?? "es");
  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to={"/"}>{i18n.button}</Link>
    </>
  );
};
export default AboutPage;
