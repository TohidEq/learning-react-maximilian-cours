import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowCards from "./components/ShowCards/ShowCards";
import Selecting from "./components/Select/Selecting";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShowCards />} />
          <Route path="/select" element={<Selecting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
