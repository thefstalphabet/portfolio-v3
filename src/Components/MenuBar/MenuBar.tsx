import * as Styles from "./MenuBarStyles";
import {
  CaretRightOutlined,
  CloseOutlined,
  CloseSquareOutlined,
  HomeOutlined,
  MessageOutlined,
  RocketOutlined,
  SolutionOutlined,
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
  getItem("Experiences", "4", <SolutionOutlined />),
  getItem("Contact Me", "5", <MessageOutlined />),
];

function MenuBar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
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
        <CloseOutlined
          className="crossIcon"
          onClick={() => toggleCollapsed()}
        />
      </Styles.Footer>
    </Styles.Container>
  );
}

export default MenuBar;
