import { useState } from "react";
function Home() {
  const [myTitle, setMyTitle] = useState("title");
  console.log("tada :D ...");
  const handleClick = (e) => {
    console.log("hello, world!", e);
    setMyTitle("new title :D");
    console.log(myTitle);
  };

  const handleClickAgain = (e) => {
    console.log("hello again", e.target);
  };

  return (
    <div className="home">
      <h2>{myTitle}</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain(e)}>click me again pls</button>
    </div>
  );
}

export default Home;
