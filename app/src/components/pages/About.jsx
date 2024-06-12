import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import d from "./../../assets/list1.4ef3dbfd8c34798f8311675bd39920fb.svg";
import e from "./../../assets/list2.a796dcaa857614af2628842758f61db8.svg";
import w from "./../../assets/list3.0a1fc350a2830777fcd51d41f4ffbc26.svg";
import imgi from "./../../assets/image 6.d2a24136b6eba0894648.png";
import imgii from "./../../assets/Rectangle 8.39211c859dc230d8f4e5.png";
import imgiii from "./../../assets/businesswoman-consulting-legal-experts-1.701a57287c65656307d9.png";
import imgiv from "./../../assets/businesswoman-consulting-legal-experts-2.22660efcfd74b7c3c12d.png";
import {Link, NavLink} from "react-router-dom";

function About(){
    return(
        <>
            <Header />
                <div className="relative top-20 pb-32">
                    <div>
                        <nav className="flex ml-2 items-center space-x-2 text-sm">
                            <Link to="/home">
                                <i className="fa fa-home"></i>
                                <span className="ml-1">Home</span>
                            </Link>
                            <i className="fa fa-angle-right"></i>
                            <Link to="/about">About Us</Link>
                        </nav>
                    </div>
                    <div>
                        <h1 className="py-4 text-center font-bold mb-8">About Us</h1>
                        <div className="flex items-center justify-center">
                            <div>
                                <img src={imgi} srcset={imgi} alt="Image" className="w-8/12" />
                            </div>
                            <div className="w-6/12 space-y-4">
                                <p><q>We create personalised, realistic job assessment that authentically communicate what's it's like to work within a specific role in your organisation</q></p>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <img src={d} srcset={d} />
                                        <span>Select the best candidates</span>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <img src={e} srcset={e} />
                                        <span>Make your recruitment seamless</span>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <img src={w} srcset={w} />
                                        <span>Grade and rank candidates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-50 mt-6">
                        <div className="py-3">
                            <h1 className="text-center py-6 font-bold">Why Choose Us</h1>
                            <div className="flex space-x-20 pl-12 pr-12 items-center justify-center">
                                <div className="bg-white">
                                    <img src={imgii} srcset={imgii} className="w-full" id="ii" />
                                    <div className="space-y-4">
                                        <h1 className="text-center mt-4 font-bold">Candidates</h1>
                                        <p className="p-3">Candidates feel they have been treated fairly and leave the experience as fans of your brand even if they do not get the job.</p>
                                    </div>
                                </div>
                                <div className="bg-white">
                                    <img src={imgiii} srcset={imgiii} className="w-full" id="iv" />
                                    <div className="space-y-4">
                                        <h1 className="text-center font-bold mt-4">Candidates</h1>
                                        <p className="p-3">Candidates feel they have been treated fairly and leave the experience as fans of your brand even if they do not get the job.</p>
                                    </div>
                                </div>
                                <div className="bg-white">
                                    <img src={imgiv} srcset={imgiv} className="w-full" id="iii" />
                                    <div className="space-y-4">
                                        <h1 className="text-center font-bold mt-4">Candidates</h1>
                                        <p className="p-3">Candidates feel they have been treated fairly and leave the experience as fans of your brand even if they do not get the job.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-8">
                        <div className="relative ml-6">
                            <h4 className="font-bold text-lg">Get news on all the latest updates straight to your mail</h4>
                        </div>
                        <div className="relative -left-12 border-2 border-black rounded-sm">
                            <button className="bg-red-500 p-3 px-8 text-white text-xs relative z-10 left-6">
                                <span>SUBSCRIBE</span>
                            </button>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}
export default About;