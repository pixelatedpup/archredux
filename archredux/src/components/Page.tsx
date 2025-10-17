import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const Page =()=>{
    const location = useLocation();
    return(
        <div className="min-h-screen flex flex-col m-0 p-0 w-full relative">
            <div>
            {location.pathname!= "/" && (<Header location={location.pathname}/> )}
            </div>
            <div className="flex flex-grow">
                <Body/>
            </div>
            <div className="mb-0 border">
            <Footer location={location.pathname}/>
            </div>
        </div>
    );
}

export default Page;