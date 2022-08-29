import { Background } from "../../Animations";
import * as Styles from "./DashboardStyles";
import socialIconsData from "../../Configs/SocialIconsData";
import { Button } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

function Dashboard() {
  return (
    <Styles.Container>
      <div className="header">
        <Styles.SocialIcons>
          {socialIconsData.map((item, idx) => (
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
        {/* --------------------- HOME SECTION ------------------------ */}
        <Styles.Home>
          <div className="sortInfo">
            <h1>
              Hello, I'm <span>Akash Patel</span>.<br />
              I'm a full-stack web developer.
            </h1>
            <Button
              type="ghost"
              href="/about"
              className="infoBtn"
              icon={<ArrowDownOutlined />}
              size="large"
            >
              Know More
            </Button>
          </div>
        </Styles.Home>
        <Background />
        {/* --------------------- ABOUT SECTION ------------------------ */}
        <Styles.About>
          <h1>About Section</h1>
        </Styles.About>
      </div>
    </Styles.Container>
  );
}

export default Dashboard;
