import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import ViewAll from "./ViewAll";
import FindByID from "./FindByID";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/"/>
        <Route path="/ViewAll" element={<ViewAll/>}/>
        <Route path="/FindByID" element={<FindByID/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
