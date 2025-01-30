import AboutMe from "../page/AboutMe";
import Contact from "../page/Contact";
import Home from "../page/Home";
import Project from "../page/Project";

/**
 * @returns array that contains path and the element
 */
export const Path: any[] = [
  { path: "/", element: <Home></Home> },
  { path: "/work", element: <Project></Project> },
  { path: "/aboutme", element: <AboutMe></AboutMe> },
  { path: "/contact", element: <Contact></Contact> },
];
