
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowCards from "./components/ShowCards/ShowCards";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShowCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
