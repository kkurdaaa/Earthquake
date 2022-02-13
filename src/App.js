import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Details from "./Component/Detail/Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:eventid" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
