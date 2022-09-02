import * as Styles from "./MenuBarStyles";
import { Anchor, Menu } from "antd";
import { useState } from "react";
import MenuItems from "../../Configs/MenuItems";
import { CloseOutlined, RightOutlined } from "@ant-design/icons";

function MenuBar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Styles.Container style={{ left: collapsed ? "0" : "-100vw" }}>
      <Anchor>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={MenuItems}
          onClick={() => {
            toggleCollapsed();
          }}
        />
      </Anchor>
      <span className="toggleIcon" onClick={() => toggleCollapsed()}>
        <RightOutlined />
      </span>
      <Styles.Footer>
        <CloseOutlined
          className="crossIcon"
          onClick={() => toggleCollapsed()}
        />
      </Styles.Footer>
    </Styles.Container>
  );
}

export default MenuBar;
