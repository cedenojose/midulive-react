import { Suspense, lazy } from "react";
import Router from "./Router";
import Page404 from "./Page404";
import Buscador from "./pages/Buscador";
import Route from "./Route";

const LazyHomePage = lazy(() => import("./pages/Home.jsx"));
const LazyAboutPage = lazy(() => import("./pages/About.jsx"));

const routes = [
  {
    path: "/:lang/about",
    Component: LazyAboutPage,
  },
  {
    path: "/search/:query",
    Component: Buscador,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router
          routes={routes}
          defaulComponent={Page404}
        >
          <Route
            path={"/"}
            Component={LazyHomePage}
          />
          <Route
            path={"/about"}
            Component={LazyAboutPage}
          />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
