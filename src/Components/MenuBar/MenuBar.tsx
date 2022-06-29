import * as Styles from "./MenuBarStyles";
import {
  CaretRightOutlined,
  CloseSquareOutlined,
  HomeOutlined,
  RocketOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("About", "2", <UserOutlined />),
  getItem("Projects", "3", <RocketOutlined />),
];

function MenuBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Styles.Container style={{ left: collapsed ? "0" : "-100vw" }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
      <span className="toggleIcon" onClick={() => toggleCollapsed()}>
        <CaretRightOutlined />
      </span>
      <Styles.Footer>
        <CloseSquareOutlined
          className="crossIcon"
          onClick={() => toggleCollapsed()}
        />
      </Styles.Footer>
    </Styles.Container>
  );
}

export default MenuBar;
