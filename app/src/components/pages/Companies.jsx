import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import imgi from "./../../assets/image 3.1b37cf1a027061f126f7.png";
import imgii from "./../../assets/image31.d9f96d75bc1692a82974.png";
import imgiii from "./../../assets/circle.png";
import imgiv from "./../../assets/imgcont.png";
import imgv from "./../../assets/hand-shake-image.b4a02c1519f2fdc286e4.png";

function Companies(){
    return(
        <>
            <Header />
                <div className="">
                    <div className="desk:mt-14 relative" id="dbgOne">
                        <div className="desk:absolute desk:left-48 desk:bottom-12 gal:pl-6 space-y-8">
                            <h1 className="text-blue-950 font-bold text-4xl gal:pt-8 gal:w-9/12 desk:w-5/12">Hire the best-accurate, fair and fast recruitment!</h1>
                            <p className="text-blue-950 text-2xl desk:w-5/12 gal:w-9/12">Our screening tests identify the best candidates and make your hiring decisions faster, easier, and bias-free.</p>
                            <button className="mt-4 bg-lime-400 font-bold desk:ml-12 shadow-lg px-8 text-white text-sm p-4 py-3 rounded-md">
                                <span>Request A Demo</span>
                            </button>
                        </div>                        
                        <div className="absolute gal:hidden right-72 top-6">
                            <img src={imgi} srcset={imgi} className="w-11/12" />
                        </div>
                    </div>
                    <div id="dbgTwo" className="flex gal:flex-col py-8 bg-orange-200 items-start">
                        <div className="desk:w-9/12 gal:w-6/12 relative space-x-6 flex items-center">
                            <img src={imgiii} srcset={imgiii} className="gal:w-5/12" />
                            <img src={imgii} srcset={imgii} />
                            <img src={imgiv} srcset={imgiv} className="gal:w-5/12" />
                        </div>
                        <div className="text-center desk:w-9/12">
                            <h1 className="text-3xl font-bold">Top talent is priceless. We make finding them affordable and easier</h1>
                            <p className="w-9/12 mx-auto mt-4 gal:w-11/12">A time-consuming screening process costs you a lot. Painful mis-hires cost you much, much more. With TestAssesify, you avoid all of this and see a huge return on investment every single year. Start screening with us today on our free plan.</p>
                            <button className="mt-6 bg-green-400 hover:bg-green-500 text-white p-2 px-24 rounded-md">
                                <span className="text-sm">Talk To Us</span>
                            </button>
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="space-y-3">
                            <h1 className="text-center font-semibold text-xl">Premium Plans</h1>
                            <p className="text-center">Maximize your potentials with tailored credits</p>
                        </div>
                        <div className="flex gal:px-4 gal:flex-col gal:space-y-4 items-center justify-center desk:space-x-5 mt-10">
                            <div className="shadow-lg space-y-2 gal:w-full flex desk:px-48 bg-white rounded-xl flex-col p-8 justify-center">
                                <h1 className="text-center text-xl">Premium Plan</h1>
                                <p className="text-center text-md">Expand your potential</p>
                                <div className="text-center text-md">Get 100 assessment credit for</div>
                                <h1 className="font-bold text-center !mb-7 text-5xl">$150.00</h1>
                                <button className="bg-red-500 text-white w-7/12 mx-auto p-2 px-8 rounded-md">
                                    <span>Top Up</span>
                                </button>
                            </div>
                            <div className="shadow-lg space-y-2 flex gal:w-full desk:px-48 bg-green-100 rounded-xl flex-col p-8 justify-center">
                                <h1 className="text-center text-xl">Premium Plan</h1>
                                <p className="text-center text-md">Energize your experience with a burst</p>
                                <div className="text-center text-md">Get 500 assessment credit for</div>
                                <h1 className="font-bold text-center !mb-7 text-5xl">$450.00</h1>
                                <button className="bg-green-600 text-white w-7/12 mx-auto p-2 px-8 rounded-md">
                                    <span>Top Up</span>
                                </button>
                            </div>
                            <div className="shadow-lg gal:w-full space-y-2 flex desk:px-48 rounded-xl flex-col p-8 justify-center">
                                <h1 className="text-center text-xl">Premium Plan</h1>
                                <p className="text-center text-md">Expand your potential</p>
                                <div className="text-center text-md">Get 100 assessment credit for</div>
                                <h1 className="font-bold text-center !mb-7 text-5xl">$700.00</h1>
                                <button className="bg-red-500 text-white w-7/12 mx-auto p-2 px-8 rounded-md">
                                    <span>Top Up</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gal:flex-col my-6 gal:px-4 desk:items-center justify-center desk:space-x-6">
                        <div className="">
                            <h1>Assessment credits</h1>
                            <div className="flex items-center">
                                <i className="p-3 fa fa-calculator border-2 border-black"></i>
                                <i className="p-3 fa fa-home border-2 border-black"></i>
                                <input type="number" placeholder="0" value="0" className="p-2 border-2 border-black w-11/12" />
                            </div>
                        </div> 
                        <div>
                            <i className="fa fa-"></i>
                        </div>
                        <div className="gal:w-full" >
                            <h1>Price</h1>
                            <div className="gal:flex" >
                                <i className="fa fa-dollar border-2 p-3"></i>
                                <input type="" placeholder="" value="0" className="border-2 border-black w-full p-2 bg-slate-100" />
                            </div>
                        </div>
                        <div className="relative top-3">
                            <button className="bg-blue-950 p-1.5 px-12 text-white text-sm rounded-md">
                                <span>Top Up</span>
                            </button>
                        </div>
                    </div>
                    <div className="py-6 bg-orange-200">
                        <h1 className="text-center text-3xl font-bold iph_xr:px-1">Join the companies replacing CVs with TestAssessify</h1>
                        <div className="flex gal:flex-col gal:space-y-4 items-center justify-evenly">
                            <div className="flex flex-col justify-center gal:mx-auto desk:w-7/12 gal:mt-6 desk:mt-0">
                                <h1 className="font-bold text-xl text-center" id="hh">Top talent is priceless. We make finding them affordable and easier</h1>
                                <p className="text-center desk:w-8/12 mx-auto mt-5 mb-5">A time-consuming screening process costs you a lot. Painful mis-hires cost you much, much more. With TestAssesify, you avoid all of this and see a huge return on investment every single year. Start screening with us today on our free plan.</p>
                                <div className="flex justify-center">
                                    <button className="p-2 desk:w-3/12 bg-green-600 text-white px-24">
                                        <span>Talk To Us</span>
                                    </button>
                                </div>
                            </div>
                            <div className="desk:w-3/12">
                                <img src={imgv} srcset={imgv} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gal:flex-col gal:space-y-4 justify-between py-6">
                        <div className="relative ml-6">
                            <h4 className="font-bold text-lg">Get news on all the latest updates straight to your mail</h4>
                        </div>
                        <div className="relative desk:-left-12 border-2 iph_14:w-11/12 border-black iph_14:flex rounded-sm">
                            <input type="search" placeholder="Subscribe" className="gal:pl-4 iph_14:w-full desk:hidden" />
                            <button className="bg-red-500 p-3 px-8 text-white text-xs relative z-10 desk:left-6">
                                <span>SUBSCRIBE</span>
                            </button>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Companies;