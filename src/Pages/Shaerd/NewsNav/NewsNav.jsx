import { useEffect, useState } from "react";
import NewsHome from "../../../Details/NewsHome";


const NewsNav = () => {
    const [newsHome,setNewsHome]=useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>setNewsHome(data))
    },[])
    return (
        <div>
            <h3 className="text-2xl">Dragon News Home</h3>
            {
              newsHome.map((newsHome,idx)=><NewsHome key={idx} newsHome={newsHome}></NewsHome>)      
            }
        </div>
    );
};

export default NewsNav;