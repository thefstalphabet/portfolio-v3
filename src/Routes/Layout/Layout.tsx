import { Outlet } from "react-router-dom";
import { Header, MenuBar } from "../../Components";
import * as Styles from "./LayoutStyles";

function Layout() {
  return (
    <Styles.Container>
      <MenuBar />
      <Header />
      <Outlet />
    </Styles.Container>
  );
}

export default Layout;
