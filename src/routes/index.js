import PageHome from "../page/home.vue";
import PageAbout from "../page/about.vue";

import PageError from "../page/error.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
  },
  {
    path: "/about",
    name: "About",
    component: PageAbout,
  },
  {
    path: "/*",
    name: "Error",
    component: PageError,
  },
];

export default routes;
