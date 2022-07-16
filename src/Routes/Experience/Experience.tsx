import * as Styles from "./ExperienceStyles";
import { Timeline } from "antd";
import ExperienceItems from "../../Configs/ExperienceItems";

function Experience() {
  return (
    <Styles.Container>
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
            <Timeline.Item key={idx} color={currentlyWorking ? "red" : "blue"}>
              <h3>{role}</h3>
              <h4>
                {org} | {employmentType}
              </h4>
              <h5>
                {startMonth} {startYear}
                {" - "}
                {currentlyWorking ? (
                  "Present"
                ) : (
                  <>
                    {endMonth} {endYear}
                  </>
                )}
              </h5>
              <h5>{location}</h5>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Styles.Container>
  );
}

export default Experience;
