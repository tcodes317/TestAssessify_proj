import {useState} from "react";
import logo from "./../../assets/TestAssessify_logo.716313a17e97567aeba5.png";

function Header(){
    const [project, useProject] = useState(true)
    return(
        <>
            <div className="">
                <header className="flex items-center justify-between">
                    <div>
                        <img src={logo} srcset={logo} />
                    </div>
                    <div>
                        <nav className="">
                            <RouterDom>
                                <Router path="./home.html" />
                                <Router path="./About.html" />
                                <Router path="./FindJob.html" />
                                <Router path="./For_comp.html" />
                            </RouterDom>
                        </nav>
                        <button>
                            <span>Login</span>
                        </button>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header;