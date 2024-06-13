import {Link, NavLink} from "react-router-dom";
import logo from "./../../assets/TestAssessify_logo.716313a17e97567aeba5.png";

export default function Header(){
    return(
        <>
            <header className="desk:absolute desk:top-0 desk:left-0 desk:w-full desk:z-10">
                <div className="desk:flex gal:flex gal:justify-between desk:items-center desk:px-2 desk:justify-between desk:bg-white gal:py-3 desk:p-2 desk:shadow-sm">
                    <div className="desk:w-52 gal:w-6/12">
                        <img src={logo} srcset={logo} className="w-52" />
                    </div>
                    <i className="fa fa-bars desk:hidden ipad_pro:hidden gal:block px-4 text-2xl"></i>
                    <div className="gal:absolute ipad_pro:static ipad_pro:block gal:z-50 desk:static gal:hidden desk:block gal:bg-white gal:top-14 gal:w-full gal:left-0">
                        <nav className="desk:space-x-6 ipad_pro:font-semibold ipad_pro:text-xl ipad_pro:items-center gal:px-2 desk:justify-end gal:space-x-0 font-normal desk:items-center gal:flex gal:flex-col ipad_pro:flex-row ipad_pro:justify-end desk:flex-row">
                            <Link to="/" className="gal:p-3 gal:hover:bg-lime-500 desk:hover:bg-none desk:p-0">Home</Link>
                            <Link to="/about" className="gal:p-3 gal:hover:bg-lime-500 desk:hover:bg-none desk:p-0">About Us</Link>
                            <Link to="/findjob" className="gal:p-3 gal:hover:bg-lime-500 desk:hover:bg-none desk:p-0">Find Jobs</Link>
                            <Link to="/forcompanies" className="gal:p-3 gal:hover:bg-lime-500 desk:hover:bg-none desk:p-0">For Companies</Link>
                            <button className="p-4 py-1.5 gal:my-3 text-white px-7 rounded-md bg-lime-500">
                                <Link to="/login">Login</Link>
                            </button>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}