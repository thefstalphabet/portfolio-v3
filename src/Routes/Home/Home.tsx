import { Background } from "../../Animations";
import * as Styles from "./HomeStyles";
import socialIconsData from "../../Configs/SocialIconsData";
import { Button } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

function Home() {
  return (
    <Styles.Container>
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
      <Styles.Body>
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
      </Styles.Body>
      <Background />
      <Styles.About>
        <h1>About Section</h1>
      </Styles.About>
    </Styles.Container>
  );
}

export default Home;
