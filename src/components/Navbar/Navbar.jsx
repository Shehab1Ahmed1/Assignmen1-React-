import { NavLink } from "react-router-dom";
import "./Navbar.module.css"

const Navbar = () => {
    function navButton(e){
        e.target.nextElementSibling.classList.toggle("hidden")
    }
    
    return (
        <>
        <nav className={` fixed  z-50 start-0 end-0  ease-in-out bg-[#2c3e50]`}  >
        <div className="container  py-5 grid grid-cols-6  gap-x-11 gap-y-7 items-center px-12 ">
        <h1 className="col-span-5 md:col-span-3"><NavLink to="/" className=" uppercase  text-slate-100 font-bold text-[25px]" >start framework</NavLink></h1>
        <div className="w-fit fa-solid col-end-7 col-span-1 fa-bars text-[22px]  py-2 px-4  text-slate-100 cursor-pointer  border-4 border-slate-100 rounded-xl   md:!hidden " onClick={(e)=>{navButton(e)}}></div>
        <ul className=" md:flex md:col-span-3   col-span-6  leading-10 flex-col md:flex-row md:space-x-3 justify-end text-slate-100 ">
            <li>
                <NavLink className={`{({ isActive}) => isActive ? "active" : ""
                } uppercase text-[17px] font-bold `} to="About"  >about</NavLink>
            </li>
            <li>
                <NavLink  className="uppercase text-[17px] font-bold" to="Portfolio">portfolio</NavLink >
            </li>
            <li>
                <NavLink  className="uppercase text-[17px] font-bold" to="Contact">contact</NavLink >
            </li>
        </ul>
        </div>
        </nav>
        </>
    );
}

export default Navbar;
