import { Route, Routes } from "react-router-dom";
import "./App.css";
import Api from "./home/Api";
import History from "./components/History";
import Forcast from "./components/Forcast";
import Nav from "./nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/history" element={<History />} />
        <Route path="/forcast" element={<Forcast />} />
      </Routes>
    </div>
  );
}

export default App;
