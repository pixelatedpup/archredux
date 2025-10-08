import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Events from "./pages/Events";
import Scores from "./pages/Scores";

const Body =()=>{
    return(
        <div className="flex flex-1">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/games" element={<Games/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/scores" element={<Scores/>}/>
        </Routes>
        </div>
    );
}

export default Body;