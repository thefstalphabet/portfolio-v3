import * as Styles from "./AboutMeStyles";
import Avatar from "../../Assets/Avatar.png";

function AboutMe() {
  return (
    <Styles.Container id="about" className="container">
      <h1 className="heading">About</h1>
      <div className="body">
        <img src={Avatar} alt="avatar" className="avatar" />
        <div className="info">
          <h1>
            I'm <span>Akash Patel</span>.<br />A full-stack web developer.
          </h1>
          <p>
            Completed my bachelor's in Technology from Takshila Institute of
            Engineering & Technology, Jabalpur. My specialization is in{" "}
            <span>Computer Science Engineering</span>. I have a deep interest in
            web development and I have worked on various projects using the{" "}
            <span>MERN stack</span> apart from that I am currently working at{" "}
            <span>TIKAJ</span> as a <span>Software Developer Engineer</span>,
            and I am always open to contributing to a great project that impacts
            the world.
          </p>
        </div>
      </div>
    </Styles.Container>
  );
}

export default AboutMe;
