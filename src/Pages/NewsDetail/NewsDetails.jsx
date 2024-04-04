import Header from "../Shaerd/Header/Header";
import Navbar from "../Shaerd/Navbar/Navbar";
import RNav from "../Shaerd/RightNav/RNav";

const NewsDetails = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 mx-36">
           <div className="col-span-3">
            <h2>NewsDetails</h2>
           </div>
           <div>
           <RNav></RNav>
           </div>
            </div>
        
        </div>
    );
};

export default NewsDetails;