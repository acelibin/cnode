import Home from './pages/home';
import About from './pages/about';

const routes = [
  {
    path: "/about",
    exact: true,
    component: About
  },
  {
    path: "/",
    exact: true,
    component: Home
  },
];

export default routes