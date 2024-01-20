import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import { Card, Tabs } from "antd";
import ProjectData from "../../Configs/ProjectsData";
import * as Styles from "./ProjectsStyles";

function Projects() {
  const { TabPane } = Tabs;

  return (
    <Styles.Container id="projects" className="container">
      <h1 className="heading">Projects</h1>
      <div className="body">
        <Tabs defaultActiveKey="1" tabBarGutter={50} size="large" centered>
          <TabPane tab="All" key="1">
            <div className="projects">
              {ProjectData.map((item, idx) => {
                const { banner, title, githubUrl, hostedUrl } = item;
                return (
                  <div className="project" key={idx}>
                    <Card
                      cover={
                        <img
                          className="banner"
                          src={banner}
                          alt={`Project ${idx}`}
                        />
                      }
                    >
                      <div className="details">
                        <h3>{title}</h3>
                        <div className="icons">
                          <a
                            href={githubUrl}
                            className="icon"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GithubOutlined />
                          </a>
                          {hostedUrl && (
                            <a
                              href={hostedUrl}
                              className="icon"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <GlobalOutlined />
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
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
                const { banner, title, githubUrl, hostedUrl } = item;
                return (
                  <div className="project" key={idx}>
                    <Card
                      cover={
                        <img
                          className="banner"
                          src={banner}
                          alt={`Project ${idx}`}
                        />
                      }
                    >
                      <div className="details">
                        <h3>{title}</h3>
                        <div className="icons">
                          <div className="icons">
                            <a
                              href={githubUrl}
                              className="icon"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <GithubOutlined />
                            </a>
                            {hostedUrl && (
                              <a
                                href={hostedUrl}
                                className="icon"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <GlobalOutlined />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
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
                  const { banner, title, githubUrl, hostedUrl } = item;
                  return (
                    <div className="project" key={idx}>
                      <Card
                        cover={
                          <img
                            className="banner"
                            src={banner}
                            alt={`Project ${idx}`}
                          />
                        }
                      >
                        <div className="details">
                          <h3>{title}</h3>
                          <div className="icons">
                            <div className="icons">
                              <a
                                href={githubUrl}
                                className="icon"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <GithubOutlined />
                              </a>
                              {hostedUrl && (
                                <a
                                  href={hostedUrl}
                                  className="icon"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <GlobalOutlined />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
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
