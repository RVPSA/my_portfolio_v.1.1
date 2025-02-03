import "./App.css";
import NavRouts from "./routings/NavRouts";

function App() {
  const pathName = window.sessionStorage.redirect;
  delete window.sessionStorage.redirect;

  if (pathName && pathName !== window.location.pathname) {
    window.history.replaceState(null, "", pathName);
  }
  return (
    <>
      <NavRouts></NavRouts>
    </>
  );
}

export default App;
