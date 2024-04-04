import Header from "../Shaerd/Header/Header";
import LNav from "../Shaerd/LeftNav/LNav";
import Navbar from "../Shaerd/Navbar/Navbar";
import NewsNav from "../Shaerd/NewsNav/NewsNav";
import RNav from "../Shaerd/RightNav/RNav";
import BrakingNews from "./BrakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:mx-36">
        <div>
          <LNav></LNav>
        </div>
        <div className="lg:col-span-2">
          <NewsNav></NewsNav>
        </div>
        <div>
          <RNav></RNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
