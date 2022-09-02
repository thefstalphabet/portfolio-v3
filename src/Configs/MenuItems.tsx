import {
  FileDoneOutlined,
  HomeOutlined,
  MessageOutlined,
  RocketOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Anchor, MenuProps } from "antd";

type MenuItemType = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItemType[],
  type?: "group"
): MenuItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItemType;
}
const { Link } = Anchor;
const MenuItems: MenuItemType[] = [
  getItem(<Link href="#home" title="Home" />, "1", <HomeOutlined />),
  getItem(<Link href="#about" title="About" />, "2", <UserOutlined />),
  getItem(
    <Link href="#experience" title="Experiences" />,
    "3",
    <SolutionOutlined />
  ),
  getItem(<Link href="#projects" title="Projects" />, "4", <RocketOutlined />),
  getItem(
    <Link href="#experties" title="Experties" />,
    "5",
    <FileDoneOutlined />
  ),
  getItem(
    <Link href="#contact" title="Contact Me" />,
    "6",
    <MessageOutlined />
  ),
];

export default MenuItems;
