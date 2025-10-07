import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Page =()=>{
    return(
        <div className="min-h-screen flex flex-col m-0 p-0">
            <div>
            <Header/>
            </div>
            <div className="flex flex-grow">
                <Body/>
            </div>
            <div className="mb-0 border">
            <Footer/>
            </div>
        </div>
    );
}

export default Page;