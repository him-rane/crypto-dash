import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import Converter from "./pages/converter/Converter";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/converter" element={<Converter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
