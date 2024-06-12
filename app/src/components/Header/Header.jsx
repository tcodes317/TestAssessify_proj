import {Link, NavLink} from "react-router-dom";
import logo from "./../../assets/TestAssessify_logo.716313a17e97567aeba5.png";

export default function Header(){
    return(
        <>
            <header className="desk:absolute desk:top-0 desk:left-0 desk:w-full desk:z-10">
                <div className="desk:flex desk:items-center desk:px-2 desk:justify-between desk:bg-white desk:p-2 desk:shadow-sm">
                    <div className="desk:w-52">
                        <img src={logo} srcset={logo} className="w-52" />
                    </div>
                    <i className="fa fa-bars desk:hidden px-4 text-2xl"></i>
                    <div className="gal:absolute desk:static gal:hdden gal:bg-white gal:top-14 gal:w-full gal:left-0">
                        <nav className="space-x-6 gal:space-x-0 font-normal gal:flex gal:flex-col">
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/findjob">Find Jobs</Link>
                            <Link to="/forcompanies">For Companies</Link>
                            <button className="p-4 py-1.5 text-white px-7 rounded-md bg-lime-500">
                                <Link to="/login">Login</Link>
                            </button>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}