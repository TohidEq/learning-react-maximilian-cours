import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import TripList from "./Components/TripList/TripList";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TripList />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
