import { Home, About, Layout, Experience } from "../Routes";

type subRoutesType = {
  path?: string;
  index?: boolean;
  component?: any;
};

type routesType = {
  path?: string;
  component?: JSX.Element;
  subRoutes?: subRoutesType[];
};

const allRoutes: Array<routesType> = [
  {
    path: "/",
    component: <Layout />,
    subRoutes: [
      {
        index: true,
        component: <Home />,
      },
      {
        path: "/about",
        component: <About />,
      },
      {
        path: "/experience",
        component: <Experience />,
      },
    ],
  },
];

export default allRoutes;
