import { Timeline } from "antd";
import ExperienceItems from "../../Configs/ExperienceItems";
import * as Styles from "./ExperiencesStyles";

function Experiences() {
  return (
    <Styles.Container id="experience">
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
    </Styles.Container>
  );
}

export default Experiences;
