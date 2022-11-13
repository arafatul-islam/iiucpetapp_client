import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import FosterCenter from "./pages/fostercenter/FosterCenter";
import List from "./pages/list/List";
import Login from "./pages/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fostercenter" element={<List />} />
        <Route path="/fostercenter/:id" element={<FosterCenter />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
