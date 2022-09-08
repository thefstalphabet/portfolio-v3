import * as Styles from "./AppStyles";
import { Routes, Route } from "react-router-dom";
import allRoutes from "./Configs/Routes";

function App() {
  return (
    <Styles.Container>
      <Routes>
        {allRoutes.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={route.component}>
              {route.subRoutes &&
                route.subRoutes.map((subRoute, idx) => {
                  return (
                    <Route
                      key={idx}
                      path={subRoute.path}
                      element={subRoute.component}
                    />
                  );
                })}
            </Route>
          );
        })}
      </Routes>
    </Styles.Container>
  );
}

export default App;
