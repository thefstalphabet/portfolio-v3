import { Button } from "antd";
import * as Styles from "./HomeStyles";

function Home() {
  return (
    <Styles.Container>
      <Styles.Body>
        <div className="sortInfo">
          <h1>Hey There, I'm Akash</h1>
          <h3>A Software Engineer, that Turns Coffee into Code</h3>
          <div className="sortInfoBtns">
            <Button type="primary">Know About</Button>
            <Button>Lets Talk</Button>
          </div>
        </div>
        <img src="Assets/Akash.png" alt="Akash" className="akashImg" />
      </Styles.Body>
    </Styles.Container>
  );
}

export default Home;
