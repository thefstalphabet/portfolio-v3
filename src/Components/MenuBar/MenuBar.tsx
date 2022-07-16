import * as Styles from "./MenuBarStyles";
import {
  CloseOutlined,
  FileDoneOutlined,
  HomeOutlined,
  MessageOutlined,
  RightOutlined,
  RocketOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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

function MenuBar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items: MenuItem[] = [
    getItem(
      <Link to="/" onClick={() => toggleCollapsed()}>
        Home
      </Link>,
      "1",
      <HomeOutlined />
    ),
    getItem(
      <Link to="/about" onClick={() => toggleCollapsed()}>
        About
      </Link>,
      "2",
      <UserOutlined />
    ),
    getItem(
      <Link to="/experties" onClick={() => toggleCollapsed()}>
        Experties
      </Link>,
      "3",
      <FileDoneOutlined />
    ),
    getItem(
      <Link to="/projects" onClick={() => toggleCollapsed()}>
        Projects
      </Link>,
      "4",
      <RocketOutlined />
    ),
    getItem(
      <Link to="/experiences" onClick={() => toggleCollapsed()}>
        Experiences
      </Link>,
      "5",
      <SolutionOutlined />
    ),
    getItem(
      <Link to="/contact" onClick={() => toggleCollapsed()}>
        Contact Me
      </Link>,
      "6",
      <MessageOutlined />
    ),
  ];

  return (
    <Styles.Container style={{ left: collapsed ? "0" : "-100vw" }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
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
