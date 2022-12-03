import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import ViewAll from "./ViewAll";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/"/>
        <Route path="/ViewAll" element={<ViewAll/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
