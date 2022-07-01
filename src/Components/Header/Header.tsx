import {
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import * as Styles from "./HeaderStyles";

const iconData = [
  {
    icon: <TwitterOutlined />,
    url: "https://twitter.com/thefstalphabet",
  },
  {
    icon: <InstagramOutlined />,
    url: "https://instagram.com/akash.code",
  },
  {
    icon: <GithubOutlined />,
    url: "http://github.com/thefstalphabet",
  },
];

function Header() {
  return (
    <Styles.Container>
      <Styles.SocialIcons>
        {iconData.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            className="icon"
            target="_blank"
            rel="noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </Styles.SocialIcons>
    </Styles.Container>
  );
}

export default Header;
