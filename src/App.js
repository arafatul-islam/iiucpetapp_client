import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import FosterCenter from "./pages/fostercenter/FosterCenter";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/fostercenters" element={<List/>}/>
        <Route path="/fostercenters/:id" element={<FosterCenter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
