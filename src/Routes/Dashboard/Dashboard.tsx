import { Background } from "../../Animations";
import * as Styles from "./DashboardStyles";
import SocialIconsData from "../../Configs/SocialIconsData";
import { BackTop, Button, Image, Timeline } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import Avatar from "../../Assets/Avatar.png";
import ExperienceItems from "../../Configs/ExperienceItems";
import { Tabs } from "antd";
import ProjectData from "../../Configs/ProjectsData";
function Dashboard() {
  const { TabPane } = Tabs;

  return (
    <Styles.Container>
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
        {/* --------------------- HOME SECTION ------------------------ */}
        <Styles.Home id="home">
          <div className="sortInfo">
            <h1>
              Hello, I'm <span>Akash Patel</span>.<br />I enjoy designing <br />
              websites and digital products.
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
        <Styles.About id="about">
          <h1>About Section</h1>
          <div className="body">
            <img src={Avatar} alt="avatar" className="avatar" />
            <div className="info">
              <h1>
                I'm <span>Akash Patel</span>.<br />A full-stack web developer.
              </h1>
              <p>
                Completed my bachelor's in Technology from Takshila Institute of
                Engineering & Technology, Jabalpur. My specialization is in{" "}
                <span>Computer Science Engineering</span>. I have a deep
                interest in web development and I have worked on various
                projects using the <span>MERN stack</span> apart from that I am
                currently working at <span>TIKAJ</span> as a{" "}
                <span>Software Developer Engineer</span>, and I am always open
                to contributing to a great project that impacts the world.
              </p>
            </div>
          </div>
        </Styles.About>
        {/* --------------------- EXPERIENCE SECTION ------------------------ */}
        <Styles.Experience id="experience">
          <h1>Experiences Section</h1>
          <div className="body">
            <Timeline mode="alternate">
              {ExperienceItems.map((item, idx) => {
                const {
                  role,
                  org,
                  employmentType,
                  startMonth,
                  startYear,
                  endMonth,
                  endYear,
                  location,
                  currentlyWorking,
                } = item;
                return (
                  <Timeline.Item
                    key={idx}
                    color={currentlyWorking ? "red" : "blue"}
                  >
                    <h2>{role}</h2>
                    <h3>
                      {org} <span>|</span> {employmentType}
                    </h3>
                    <h3>
                      {startMonth} {startYear}
                      <span>-</span>
                      {currentlyWorking ? (
                        "Present"
                      ) : (
                        <>
                          {endMonth} {endYear}
                        </>
                      )}
                    </h3>
                    <h3>{location}</h3>
                  </Timeline.Item>
                );
              })}
            </Timeline>
          </div>
        </Styles.Experience>
        {/* --------------------- Projects SECTION ------------------------ */}
        <Styles.Projects id="projects">
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
                  {ProjectData.filter(
                    (item) => item.technologyUsed === "mern"
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
            </Tabs>
          </div>
        </Styles.Projects>
        {/* --------------------- Experties SECTION ------------------------ */}
        <Styles.Experties id="experties">
          <h1>Experties</h1>
        </Styles.Experties>
      </div>
    </Styles.Container>
  );
}

export default Dashboard;
