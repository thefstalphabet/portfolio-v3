import * as Styles from "./MenuBarStyles";
import { Anchor, Menu } from "antd";
import { useState } from "react";
import MenuItems from "../../Configs/MenuItems";
import { CloseOutlined, RightOutlined } from "@ant-design/icons";

interface IProp {
  toggleButtonColor: string
}

function MenuBar(props: IProp) {
  const {toggleButtonColor} = props

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
      <span
        className="toggleIcon"
        onClick={() => toggleCollapsed()}
        style={{ color: toggleButtonColor }}
      >
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
