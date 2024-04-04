import { useEffect, useState } from "react";
import LNavDetails from "../../../Details/LNavDetails";
import image1 from '../../../assets/assets/1.png';
import image2 from '../../../assets/assets/2.png';
import image3 from '../../../assets/assets/3.png';
import moment from 'moment';
import { CiCalendar } from "react-icons/ci";

const LNav = () => {
    const [news,setNews]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])
    return (
        <div className="lg:w-72">
           <h3 className="text-2xl">All Caterogy</h3> 
           <h3 className="bg-gray-200 py-4 px-8 text-center rounded-lg">National News</h3>
           <div className="text-left ml-20 text-[#9F9F9F] font-medium text-xl">
            {
                news.map((newDetails,idx)=><LNavDetails key={idx} newDetails={newDetails}></LNavDetails>)
            }
           </div>
           <div className=" w-72 bg-base-100 ">
  <figure><img src={image1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
    <div className="flex ">
        <p>Sports</p>
    <p className="flex items-center"><CiCalendar /> {moment().format("MMM D, YY")}</p> 
    </div>
   
  </div>
</div>
<div className=" w-72 bg-base-100 ">
  <figure><img src={image2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
    <div className="flex ">
        <p>Sports</p>
    <p className="flex items-center"> <CiCalendar />{moment().format("MMM D, YY")}</p> 
    </div>
   
  </div>
</div>
<div className=" w-72  bg-base-100 ">
  <figure><img src={image3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
    <div className="flex ">
        <p>Sports</p>
    <p className="flex items-center"> <CiCalendar /> {moment().format("MMM D, YY")}</p> 
    </div>
  </div>
</div>
        </div>
    );
};

export default LNav;