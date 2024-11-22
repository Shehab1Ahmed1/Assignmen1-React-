import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className=" min-h-[60vh]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
}

export default Layout;
