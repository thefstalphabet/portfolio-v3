import { Outlet } from "react-router-dom";
import { MenuBar } from "../../Components";
import * as Styles from "./LayoutStyles";

function Layout() {
  return (
    <Styles.Container>
      <MenuBar />
      <Outlet />
    </Styles.Container>
  );
}

export default Layout;
