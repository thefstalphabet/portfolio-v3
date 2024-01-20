import { Card } from "antd";
import * as Styles from "./ExpertiesStyles";
import ExpertiesItems from "../../Configs/ExpertiesItems";

function Experties() {
  return (
    <Styles.Container id="experties" className="container">
      <h1 className="heading">Experties</h1>
      <div className="experties">
        {ExpertiesItems.map((ele, idx) => {
          const { logo, title, description } = ele;
          return (
            <Card className="card" key={idx} hoverable={false}>
              <img src={logo} alt={`logo ${idx}`} />
              <h2>{title}</h2>
              <p>{description}</p>
            </Card>
          );
        })}
      </div>
    </Styles.Container>
  );
}

export default Experties;
