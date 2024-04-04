import { NavLink } from "react-router-dom";
import user from '../../../assets/assets/user.png';

const Navbar = () => {
    const navBar=<>
        <li><NavLink className='no-underline'>Home</NavLink></li>
        <li><NavLink className='no-underline'>About</NavLink></li>
        <li><NavLink className='no-underline'>Career</NavLink></li>
    </>
    return (
       <div className="mx-36">
         <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
              {navBar}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {navBar}
          </ul>
        </div>
        <div className="navbar-end">
         <div className="flex gap-4 items-center">
         <img src={user} className="w-12 h-12 "/>
         <NavLink  to='/login' className="py-4 px-6 no-underline bg-black text-white">LOGIN</NavLink>
         </div>
        </div>
      </div>
       </div>
    );
};

export default Navbar;