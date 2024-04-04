import logo from '../../../assets/assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className="font-poppins text-center">
            <img src={logo}/>
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D,YYYY")}</p>
        </div>
    );
};

export default Header;