import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import imgi from "./../../assets/image 2.100508bfef6c899d5fbe.png";
import { Link } from "react-router-dom";

export default function FindJob(){
    return(
        <>
            <Header />
                <div className="relative mt-14 mb-6">
                    <div id="gdpp" className="">
                        <div className="absolute top-28 left-48 space-y-8">
                            <h1 className="text-5xl font-bold text-blue-950">Revolutionizing Your Job Search</h1>
                            <p className="text-blue-950 text-3xl">Discover opportunities, and the future of your career with us.</p>
                            <div className="text-md">Keyword Search</div>
                            <form action="" method="post" className="flex items-center border-2 w-12/12">
                                <input type="search" className="p-3 w-full focus:outline-none" placeholder="Try... e.g Sales Manager" />
                                <button className="p-3 bg-lime-600 px-7 text-white">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="absolute top-12 right-96">
                            <img src={imgi} srcset={imgi} className="w-96" />
                        </div>
                    </div>
                    <div className="space-y-3 mt-6">
                        <h1 className="text-xl ml-4 font-bold">Available Jobs for you</h1>
                        <div className="bg-slate-200 p-4">
                            <h1>Filter By:</h1>
                            <div className="flex ml-6 items-center space-x-8">
                                <div className="relative w-1/12">
                                    <div className="flex bg-white justify-between px-2 rounded-md py-2 items-center">
                                        <div className="">Select</div>
                                        <i className="fa fa-angle-down border-l-2 pl-2"></i>
                                    </div>
                                    <div className="bg-white mt-1 absolute hidden py-2">
                                        <div className="p-2 hover:bg-lime-400 cursor-pointer">Most Recent (Asc)</div>
                                        <div className="p-2 hover:bg-lime-400 cursor-pointer">Most Recent (Desc)</div>
                                    </div>
                                </div>
                                <div className="relative w-2/12">
                                    <div className="flex items-center relative justify-between">
                                        <div className="flex items-center w-4/12 space-x-3">
                                            <div className="flex items-center space-x-2">
                                                <i className="fa fa-location"></i>
                                                <div>Location</div>
                                            </div>
                                            <div className="flex border-2 items-center bg-white justify-between px-2 py-2">
                                                <div className="pr-36">Select</div>
                                                <i className="fa fa-angle-down border-l-2 pl-3"></i>
                                            </div>
                                        </div>
                                        <div className="hidde absolute top-12 left-24 bg-white hidden text-sm w-9/12 p-2">
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">Abia State</div>
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">Adamawa State</div>
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">Borno State</div>
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">Enugu State</div>
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">Gombe State</div>
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">Lagos State</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-2/12">
                                    <div className="flex items-center relative justify-between">
                                        <div className="flex items-center w-4/12 space-x-3">
                                            <div className="flex items-center space-x-2">
                                                <i className="fa fa-location"></i>
                                                <div className="truncate">Job Type</div>
                                            </div>
                                            <div className="flex border-2 items-center bg-white justify-between px-2 py-2">
                                                <div className="pr-36">Select</div>
                                                <i className="fa fa-angle-down border-l-2 pl-3"></i>
                                            </div>
                                        </div>
                                        <div className="hidde absolute top-12 left-24 bg-white hidden w-9/12 text-sm p-2">
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">ELTP Intern</div>
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">ELTP Retail</div>
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">Facilitator</div>
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">Test Job</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-2/12">
                                    <div className="flex items-center relative justify-between">
                                        <div className="flex items-center w-4/12 space-x-3">
                                            <div className="flex items-center space-x-2">
                                                <i className="fa fa-location"></i>
                                                <div className="truncate">Industry</div>
                                            </div>
                                            <div className="flex border-2 items-center bg-white justify-between px-2 py-2">
                                                <div className="pr-36">Select</div>
                                                <i className="fa fa-angle-down border-l-2 pl-3"></i>
                                            </div>
                                        </div>
                                        <div className="hidde absolute top-12 left-24 bg-white w-9/12 hidden text-sm p-2">
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">Education</div>
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">Financial Institution</div>
                                            <div className="p-2 hover:bg-lime-400 cursor-pointer">Information Technology</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 mt-5">
                        <div className="flex justify-center space-x-4 items-center">
                            <div className="border-2 p-4 w-5/12 rounded-lg"> {/** Card */}
                                <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">SPEED_EXAM_TEST</div>
                                        <div>Lorem Excellentiam Dev</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-clock"></i>
                                                    <span>3d ago</span>
                                                </button>
                                            </div>
                                            <div className="absolut flex justify-end right-0 mt-4">
                                                <Link to="/">View Details</Link>
                                                <i className="fa fa-arrow"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 p-4 w-5/12 rounded-lg"> {/** Card */}
                            <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">SPEED_EXAM_TEST</div>
                                        <div>Access Bank PLC</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-clock"></i>
                                                    <span>3d ago</span>
                                                </button>
                                            </div>
                                            <div className="absolut flex justify-end right-0 mt-4">
                                                <Link to="/">View Details</Link>
                                                <i className="fa fa-arrow"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center space-x-4 items-center">
                            <div className="border-2 p-4 w-5/12 rounded-lg"> {/** Card */}
                                <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">Access Bank ELTP Retail (April_2024)</div>
                                        <div>Access Bank PLC</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-clock"></i>
                                                    <span>3d ago</span>
                                                </button>
                                            </div>
                                            <div className="absolut flex justify-end right-0 mt-4">
                                                <Link to="/">View Details</Link>
                                                <i className="fa fa-arrow"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 p-4 w-5/12 rounded-lg"> {/** Card */}
                            <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-green-500 h-[30px] w-[120px]">Open</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">Access Bank ELTP Retail (Amb)</div>
                                        <div>Access Bank PLC</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-clock"></i>
                                                    <span>3d ago</span>
                                                </button>
                                            </div>
                                            <div className="absolut flex justify-end right-0 mt-4">
                                                <Link to="/">View Details</Link>
                                                <i className="fa fa-arrow"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center space-x-4 items-center">
                            <div className="border-2 p-4 w-5/12 rounded-lg"> {/** Card */}
                                <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">Youthrive Program</div>
                                        <div>Access Bank PLC</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-clock"></i>
                                                    <span>3d ago</span>
                                                </button>
                                            </div>
                                            <div className="absolut flex justify-end right-0 mt-4">
                                                <Link to="/">View Details</Link>
                                                <i className="fa fa-arrow"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 p-4 w-5/12 rounded-lg"> {/** Card */}
                            <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">Youthrive Access Bank (ELTP Retail)</div>
                                        <div>Access Bank PLC</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-clock"></i>
                                                    <span>3d ago</span>
                                                </button>
                                            </div>
                                            <div className="absolut flex justify-end right-0 mt-4">
                                                <Link to="/">View Details</Link>
                                                <i className="fa fa-arrow"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center space-x-4 items-center">
                            <div className="border-2 p-4 w-5/12 rounded-lg"> {/** Card */}
                                <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold text-2xl">Access Bank ELTP Retail.</div>
                                        <div>Lorem Excellentiam Dev</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-clock"></i>
                                                    <span>3d ago</span>
                                                </button>
                                            </div>
                                            <div className="absolut flex justify-end right-0 mt-4">
                                                <Link to="/">View Details</Link>
                                                <i className="fa fa-arrow"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 p-4 w-5/12 rounded-lg"> {/** Card */}
                            <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">Interns Internal Recruitment</div>
                                        <div>Lorem Excellentiam Dev</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-clock"></i>
                                                    <span>3d ago</span>
                                                </button>
                                            </div>
                                            <div className="absolut flex justify-end right-0 mt-4">
                                                <Link to="/">View Details</Link>
                                                <i className="fa fa-arrow"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end px-40">
                            <select className="border-2 p-2 rounded-lg focus:outline-none">
                                <option>5 per page</option>
                                <option>10 per page</option>
                                <option>15 per page</option>
                                <option>25 per page</option>
                                <option>35 per page</option>
                                <option>45 per page</option>
                            </select>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}