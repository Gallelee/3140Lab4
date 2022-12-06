import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import ViewAll from "./ViewAll";
import FindByID from "./FindByID";
import NewEntry from "./NewEntry";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/ViewAll" element={<ViewAll/>}/>
        <Route path="/FindByID" element={<FindByID/>}/>
        <Route path="/NewEntry" element={<NewEntry/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
