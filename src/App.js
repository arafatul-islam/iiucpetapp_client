import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import FosterCenter from "./pages/fostercenter/FosterCenter";
import List from "./pages/list/List";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Adoption from "./pages/adoption/adoption";
import Pets from "./pages/pet/pets";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import VetClinic from "./pages/vet/VetClinic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fostercenter" element={<List />} />
        <Route path="/fostercenter/:id" element={<FosterCenter />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/adoption" element={<Adoption />} />{" "}
        <Route path="/pets" element={<Pets />} />
        <Route path="/vets" element={<VetClinic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
