import { Dashboard, Layout, Page404 } from "../Routes";

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
        component: <Dashboard />,
      },
      {
        path: "*",
        component: <Page404 />,
      },
    ],
  },
];

export default allRoutes;
