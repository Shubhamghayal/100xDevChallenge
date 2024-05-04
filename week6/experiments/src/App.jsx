import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <HeadersWithButtons />
      <Header tittle="shambafuhf"></Header>
    </div>
  );
}

function HeadersWithButtons() {
  const [tittle, setTitle] = useState("shubhamGHayal");

  function updateTitle() {
    setTitle(Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Click to change the tittle</button>
      <Header tittle={tittle}></Header>
    </div>
  );
}
function Header({ tittle }) {
  return <div>{tittle}</div>;
}

export default App;
