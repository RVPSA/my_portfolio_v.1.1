import { HashRouter, Route, Routes } from "react-router";
import Layout from "./Layout";
import { Path } from "./Path";

/**
 * Route handling area
 * Display the layout first, inside that other component
 */
const NavRouts = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout></Layout>}>
          {Path.map((data, index) => {
            return (
              <Route path={data.path} element={data.element} key={index} />
            );
          })}
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default NavRouts;
