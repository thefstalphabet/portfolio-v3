import { Image, Tabs } from "antd";
import ProjectData from "../../Configs/ProjectsData";
import * as Styles from "./ProjectsStyles";

function Projects() {
  const { TabPane } = Tabs;
  
  return (
    <Styles.Container id="projects">
      <h1>Projects</h1>
      <div className="body">
        <Tabs defaultActiveKey="1" tabBarGutter={100} size="large" centered>
          <TabPane tab="All" key="1">
            <div className="projects">
              {ProjectData.map((item, idx) => {
                const { banner, title } = item;
                return (
                  <div className="project" key={idx}>
                    <Image
                      src={banner}
                      alt={`Project ${idx}`}
                      placeholder
                      className="banner"
                    />
                    <h2>{title}</h2>
                  </div>
                );
              })}
            </div>
          </TabPane>
          <TabPane
            tab="React"
            key="2"
            disabled={
              ProjectData.filter((item) => item.technologyUsed === "react")
                .length === 0
                ? true
                : false
            }
          >
            <div className="projects">
              {ProjectData.filter(
                (item) => item.technologyUsed === "react"
              ).map((item, idx) => {
                const { banner, title } = item;
                return (
                  <div className="project" key={idx}>
                    <Image
                      src={banner}
                      alt={`Project ${idx}`}
                      placeholder
                      className="banner"
                    />
                    <h2>{title}</h2>
                  </div>
                );
              })}
            </div>
          </TabPane>
          <TabPane
            tab="MERN"
            key="3"
            disabled={
              ProjectData.filter((item) => item.technologyUsed === "mern")
                .length === 0
                ? true
                : false
            }
          >
            <div className="projects">
              {ProjectData.filter((item) => item.technologyUsed === "mern").map(
                (item, idx) => {
                  const { banner, title } = item;
                  return (
                    <div className="project" key={idx}>
                      <Image
                        src={banner}
                        alt={`Project ${idx}`}
                        placeholder
                        className="banner"
                      />
                      <h2>{title}</h2>
                    </div>
                  );
                }
              )}
            </div>
          </TabPane>
        </Tabs>
      </div>
    </Styles.Container>
  );
}

export default Projects;
