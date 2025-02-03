import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout";
import { Path } from "./Path";

/**
 * Route handling area
 * Display the layout first, inside that other component
 */
const NavRouts = () => {

  const pathName = window.sessionStorage.redirect;
  delete window.sessionStorage.redirect;

  if (pathName && pathName !== window.location.pathname){
    window.history.replaceState(null,'',pathName)
  }

  return (
    <BrowserRouter basename="/my_portfolio_v.1.1/">
      <Routes>
        <Route element={<Layout></Layout>}>
          {Path.map((data,index) => {
            return <Route path={data.path} element={data.element} key={index}/>;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavRouts;
