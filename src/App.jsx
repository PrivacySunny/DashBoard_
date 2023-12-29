import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [showMenu, setShowMenu] = useState(false); //state to control menu in mobile view

  return (
    <div className="container">
      <Sidebar user="Admin" show={showMenu} setShowMenu={setShowMenu} />
      <Main setShowMenu={setShowMenu} />
    </div>
  );
}

export default App;
