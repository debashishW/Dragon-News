import { FaGoogle,FaGithub,FaInstagram,FaFacebook,FaXTwitter   } from "react-icons/fa6";
import QZone1 from '../../../assets/assets/qZone1.png';
import QZone2 from '../../../assets/assets/qZone2.png';
import QZone3 from '../../../assets/assets/qZone3.png';
import bgImage from '../../../assets/assets/bg.png'
const RNav = () => {
    return (
        <div>
          <h3 className="text-2xl">Login With</h3>  
          <div>
          <button className="btn btn-wide flex items-center"><FaGoogle />Login with Google</button>
          <button className="btn btn-wide flex items-center"><FaGithub />Login with GitHub</button>
          </div>
          <h3>Find Us On</h3>
          <div className="border-solid border-2 border-gray-200 rounded-lg">
          <a className="btn btn-wide"><FaFacebook />Facebook</a>
          <hr/>
          <a className="btn btn-wide"><FaXTwitter />Twitter</a>
          <hr/>
          <a className="btn btn-wide"><FaInstagram />Instagram</a>
          </div>
          <div>
            <h3 className="mb-8">Q-Zone</h3>
            <div className="bg-gray-100">
            <img src={QZone1} />
            <img src={QZone2} />
            <img src={QZone3} />
            </div>
          </div>
          <div className="bg-[url('bgImage')]">
            <h3>Create an Amazing Newspaper</h3>
            <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className="btn bg-[#D72050] text-white">Learn More</button>
          </div>
        </div>
    );
};

export default RNav;