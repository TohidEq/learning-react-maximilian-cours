import Card from "./components/Card/Card";
function App() {
  const ctitle = "fdsfsd";
  const cprice = 1234;
  const cdate = new Date(2022, 2, 14);
  return (
    <div className="App">
      <div className="content">
        <Card date={cdate} title={ctitle} price={cprice} />
      </div>
    </div>
  );
}

export default App;
