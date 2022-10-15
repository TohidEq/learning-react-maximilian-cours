import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Components/Home/Home";
import TestOne from "./Components/TestOne/TestOne";
import TestTwo from "./Components/TestTwo/TestTwo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          links: -=
          <NavLink to={"/"}>Home</NavLink> -=
          <NavLink to={"/testone"}>test one</NavLink> -=
          <NavLink to={"/testtwo"}>test two</NavLink> -=
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="testone" element={<TestOne />} />

          <Route path="testtwo" element={<TestTwo />} />
          {/* <Route path="*" element={<NotFound />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*



<BrowserRouter>
        <nav>
          links:
          <Link to={"/"}>Home</Link>
          <Link to={"/testone"}>test one</Link>
          <Link to={"/testtwo"}>test two</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<TripList />} />
          <Route path="testone">
            <TestOne />
          </Route>

          <Route path="testtwo">
            <TestTwo />
          </Route>
          {/ <Route path="*" element={<NotFound />} /> /}
        </Routes>
      </BrowserRouter>


*/
