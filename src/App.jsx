import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayOut from "../src/Components/Homefolder/LayOut";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayOut />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
