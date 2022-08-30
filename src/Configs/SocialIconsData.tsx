import {
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

type SocialIconsDataType = {
  icon: React.ReactNode;
  url: string;
};

const SocialIconsData: Array<SocialIconsDataType> = [
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

export default SocialIconsData;
