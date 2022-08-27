import { Background } from "../../Animations";
import * as Styles from "./HomeStyles";
import socialIconsData from "../../Configs/SocialIconsData";
import { Button } from "antd";

function Home() {
  return (
    <Styles.Container>
      <Background />
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
      <Styles.SortInfo>
        <h1>Hello, I'm <span>Akash Patel</span>.<br/>I'm a full-stack web developer.</h1>
        <Button type="primary">Know More</Button>
      </Styles.SortInfo>
    </Styles.Container>
  );
}

export default Home;
