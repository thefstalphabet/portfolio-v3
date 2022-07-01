import * as Styles from "./HomeStyles";

function Home() {
  return (
    <Styles.Container>
      <Styles.Body>
        <img src="Assets/Akash.png" alt="Akash" className="akashImg" />
        <div className="sortInfo">
          <h1>Hey There, I'm Akash</h1>
          <h3>A Software Engineer, that turns Coffee into Code</h3>
        </div>
      </Styles.Body>
    </Styles.Container>
  );
}

export default Home;
