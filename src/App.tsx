import * as Styles from "./AppStyles";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Routes";

function App() {
  return (
    <Styles.Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Styles.Container>
  );
}

export default App;
