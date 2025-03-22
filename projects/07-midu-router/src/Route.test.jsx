import { describe, it, expect, beforeEach, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Router from "./Router.jsx";
import Route from "./Route.jsx";
import Link from "./Link.jsx";
import { getCurrentPath } from "./utils/utils.js";

vi.mock("./utils/utils.js", () => ({
  getCurrentPath: vi.fn(),
}));

describe("Router", () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });
  it("should render without problems", () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it("should render 404 if no routes match", () => {
    render(
      <Router
        routes={[]}
        defaulComponent={() => <h1>404</h1>}
      />
    );
    expect(screen.getByText("404")).toBeTruthy();
  });

  it("should render the component of the first route that matches", () => {
    getCurrentPath.mockReturnValue("/");
    const routes = [
      {
        path: "/",
        Component: () => <h1>Home</h1>,
      },
      {
        path: "/about",
        Component: () => <h1>About</h1>,
      },
    ];
    render(<Router routes={routes} />);
    expect(screen.getByText("Home")).toBeTruthy();
  });

  // ===Test Midu===
  // it("should navigate using Links", async () => {
  //   getCurrentPath.mockReturnValueOnce("/");

  //   render(
  //     <Router>
  //       <Route
  //         path="/"
  //         Component={() => {
  //           return (
  //             <>
  //               <h1>Home</h1>
  //               <Link to="/about">Go to About</Link>
  //             </>
  //           );
  //         }}
  //       />
  //       <Route
  //         path="/about"
  //         Component={() => <h1>About</h1>}
  //       />
  //     </Router>
  //   );

  //   // Click on the link
  //   const anchor = screen.getByText(/Go to About/);
  //   fireEvent.click(anchor);

  //   const aboutTitle = await screen.findByText("About");

  //   // Check that the new route is rendered
  //   console.log("====routerPath====", getCurrentPath());
  //   expect(aboutTitle).toBeTruthy();
  // });
  // === Final ===

  // it("should navigate using Links", async () => {
  //   getCurrentPath.mockReturnValueOnce("/");
  //   render(
  //     <Router>
  //       <Route
  //         path="/"
  //         Component={() => {
  //           return (
  //             <>
  //               <h1>Home</h1>
  //               <Link to="/about">Go to About</Link>
  //             </>
  //           );
  //         }}
  //       />
  //       <Route
  //         path="/about"
  //         Component={() => {
  //           return (
  //             <>
  //               <h1>About</h1>
  //             </>
  //           );
  //         }}
  //       />
  //     </Router>
  //   );

  //   // Click on the link
  //   const link = screen.getByText(/Go to About/);
  //   fireEvent.click(link);
  //   const aboutTitle = await screen.findByText("About");

  //   // Check the the new route is rendered
  //   expect(aboutTitle).toBeTruthy();
  // });
});
