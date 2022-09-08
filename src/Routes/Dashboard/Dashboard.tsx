import { Background } from "../../Animations";
import * as Styles from "./DashboardStyles";
import SocialIconsData from "../../Configs/SocialIconsData";
import { BackTop, Button } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import {
  MenuBar,
  AboutMe,
  Experiences,
  Projects,
  Experties,
} from "../../Components";
function Dashboard() {
  return (
    <Styles.Container>
      <MenuBar />
      <BackTop />
      <div className="header">
        <Styles.SocialIcons>
          {SocialIconsData.map((item, idx) => (
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
      </div>
      <div className="body">
        <Styles.Home id="home">
          <div className="sortInfo">
            <h1>
              Hello, I'm <span>Akash Patel</span>.<br />I enjoy designing <br />
              websites and digital products.
            </h1>
            <Button
              type="ghost"
              href="#about"
              className="infoBtn"
              icon={<ArrowDownOutlined />}
              size="large"
            >
              Know More
            </Button>
          </div>
        </Styles.Home>
        <Background />
        <AboutMe />
        <Experiences />
        <Projects />
        <Experties />
      </div>
    </Styles.Container>
  );
}

export default Dashboard;
