import { Background } from "../../Animations";
import * as Styles from "./HomeStyles";
import socialIconsData from "../../Configs/SocialIconsData";
import { Button } from "antd";
import About from "../About/About";

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
            <Button type="ghost" href="/about" className="infoBtn">
              Know More
            </Button>
          </div>
        </Styles.Home>
      </Styles.Body>
      <Background />
      <About />
    </Styles.Container>
  );
}

export default Home;
