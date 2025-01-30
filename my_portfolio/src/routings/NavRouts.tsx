import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout";
import { Path } from "./Path";

/**
 * Route handling area
 * Display the layout first, inside that other component
 */
const NavRouts = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout></Layout>}>
          {Path.map((data) => {
            return <Route path={data.path} element={data.element} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavRouts;
