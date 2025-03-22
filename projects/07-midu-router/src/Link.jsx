/* eslint-disable react/prop-types */
import { EVENTS } from "./utils/const";

const navigate = (href) => {
  window.history.pushState({}, "", href);
  // crear evento personalizado para avisar que se ha cambiado la URL
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
};
const Link = ({ target, to, ...props }) => {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0; // primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      event.preventDefault();

      navigate(to); // Navegacion SPA

      window.scrollTo(0, 0); // Subir el scroll al inicio de la pantalla
    }
  };
  return (
    <a
      onClick={handleClick}
      href={to}
      target={target}
      {...props}
    />
  );
};
export default Link;
