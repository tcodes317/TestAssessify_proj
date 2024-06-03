import logo from "./../../assets/TestAssessify_logo.716313a17e97567aeba5.png";
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import Home from "./../Main/Home";
// import About from "./../Main/About";
function Header(){
    return(
        <>
            <header className="relative bg-slate-100">
                <div className="flex px-3 pr-5 py-4 items-center justify-between">
                    <BrowserRouter>
                    <div className="w-52">
                        <img src={logo} srcset={logo} />
                        <Link to="/">Home</Link>
                        <NavLink to="about">About</NavLink>
                    </div>
                    <div className="flex items-center justify-between">
                            <nav className="space-x-5 font-bold mr-5">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                </Routes>
                            </nav>
                        <button className="p-2 border-none bg-green-500 text-white rounded-xl px-8">
                            <span>Login</span>
                        </button>
                    </div>
                    </BrowserRouter>
                </div>
            </header>
        </>
    )
}
export default Header;