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
                <div className="desk:relative desk:top-20 desk:pb-32">
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
                        <h1 className="py-4 text-center font-bold gal:text-2xl desk:text-lg mb-8">About Us</h1>
                        <div className="desk:flex nest:px-12 nest:justify-evenly ipad:flex desk:items-center ipad:space-x-4 desk:justify-center">
                            <div>
                                <img src={imgi} srcset={imgi} alt="Image" className="desk:w-8/12 ipad:w-8/12 gal:w-11/12 iph_se:w-9/12 gal:mx-auto" />
                            </div>
                            <div className="w-6/12 space-y-4 nest:w-4/12 nestMax:w-5/12 gal:w-10/12 gal:mx-auto gal:mt-6 ipad:w-6/12">
                                <h1 className="text-center font-semibold text-2xl">What we do</h1>
                                <p className="gal:text-left desk:text-left gal:mx-auto desk:mx-0"><q>We create personalised, realistic job assessment that authentically communicate what's it's like to work within a specific role in your organisation</q></p>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <img src={d} srcset={d} />
                                        <span className="gal:hidden">Select the best candidates</span>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <img src={e} srcset={e} />
                                        <span className="gal:hidden">Make your recruitment seamless</span>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <img src={w} srcset={w} />
                                        <span className="gal:hidden">Grade and rank candidates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-50 mt-6">
                        <div className="py-3">
                            <h1 className="text-center py-6 font-bold gal:text-xl">Why Choose Us</h1>
                            <div className="flex deskii:px-24 gal:flex-col ipad:flex-row ipad:space-x-6 ipad:space-y-0 gal:space-y-6 gal:space-x-0 gal:px-4 desk:space-x-20 desk:pl-12 desk:pr-12 items-center justify-center">
                                <div className="bg-white gal:rounded-lg">
                                    <img src={imgii} srcset={imgii} className="w-full" id="ii" />
                                    <div className="space-y-4">
                                        <h1 className="text-center mt-4 font-bold">Candidates</h1>
                                        <p className="p-3">Candidates feel they have been treated fairly and leave the experience as fans of your brand even if they do not get the job.</p>
                                    </div>
                                </div>
                                <div className="bg-white gal:rounded-lg">
                                    <img src={imgiii} srcset={imgiii} className="w-full" id="iv" />
                                    <div className="space-y-4">
                                        <h1 className="text-center font-bold mt-4">Candidates</h1>
                                        <p className="p-3">Candidates feel they have been treated fairly and leave the experience as fans of your brand even if they do not get the job.</p>
                                    </div>
                                </div>
                                <div className="bg-white gal:rounded-lg">
                                    <img src={imgiv} srcset={imgiv} className="w-full" id="iii" />
                                    <div className="space-y-4">
                                        <h1 className="text-center font-bold mt-4">Candidates</h1>
                                        <p className="p-3">Candidates feel they have been treated fairly and leave the experience as fans of your brand even if they do not get the job.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex nest:pr-12 nest:pl-8 gal:mb-4 ipad:flex ipad:items-center ipad:flex-row items-center gal:space-y-4 justify-between gal:flex-col pt-8">
                        <div className="relative ml-6">
                            <h4 className="font-bold text-lg gal:text-xl gal:w-11/12 ipad:w-full">Get news on all the latest updates straight to your mail</h4>
                        </div>
                        <div className="relative -left-12 gal:left-0 border-2 ipad:justify-end iph_12:flex ipad:w-2/12 iph_12:w-11/12 desk:w-32 iph_12:left-0 iph_xr:flex border-black iph_xr:w-11/12 rounded-sm">
                            <input type="search" className="gal:py-1 ipad:hidden iph_12:w-11/12 iph_xr:w-full gal:focus:outline-none gal:pl-3" placeholder="Subscribe" />
                            <button className="bg-red-500 p-3 px-8 text-white gal:left-0 text-xs relative z-10 left-6">
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