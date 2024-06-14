import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import imgi from "./../../assets/image 2.100508bfef6c899d5fbe.png";
import { Link } from "react-router-dom";

export default function FindJob(){
    return(
        <>
            <Header />
                <div className="relative desk:mt-14 mb-6">
                    <div id="gdpp" className="">
                        <div className="absolute ipad:flex ipad:flex-col ipad:w-7/12 gal:left-0 desk:top-28 gal:px-4 gal:pt-8 desk:left-48 space-y-8">
                            <h1 className="text-5xl font-bold gal:text-4xl ipad:w-full ipad:text-5xl text-blue-950 gal:w-6/12">Revolutionizing Your Job Search</h1>
                            <p className="text-blue-950 text-3xl ipad:w-11/12">Discover opportunities, and the future of your career with us.</p>
                            <div className="text-md">Keyword Search</div>
                            <form action="" method="post" className="flex items-center border-2 w-12/12">
                                <input type="search" className="p-3 w-full focus:outline-none" placeholder="Try... e.g Sales Manager" />
                                <button className="p-3 bg-lime-600 px-7 text-white">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="absolute ipad:hidde ipad:right-0 ipad:w-5/12 top-12 right-96">
                            <img src={imgi} srcset={imgi} className="w-96 iph_14:hidden ipad:block pix:hidden" />
                        </div>
                    </div>
                    <div className="space-y-3 mt-6">
                        <h1 className="text-xl ml-4 font-bold">Available Jobs for you</h1>
                        <div className="bg-slate-200 gal:overflow-hidden p-4 gal:mx-2 gal:p-4 gal:rounded-lg">
                            <h1 className="gal:font-semibold">Filter By:</h1>
                            <div className="flex nestMax:flex-row ipad:flex-row ipad:space-x-12 gal:pt-4 gal:flex-col gal:space-y-2 desk:ml-6 desk:items-center space-x-8 gal:space-x-0">
                                <div className="ipad:hidde nestMax:flex-row nestMax:flex nestMax:items-center">
                                    <div className="relative nestMax:!w-4/12 desk:w-2/12 gal:w-8/12">
                                    <div className="flex bg-white justify-between px-2 rounded-md py-2 items-center">
                                        <div className="nestMax:pr-12">Select</div>
                                        <i className="fa fa-angle-down border-l-2 pl-2"></i>
                                    </div>
                                    <div className="bg-white mt-1 absolute hidden py-2">
                                        <div className="p-2 hover:bg-lime-400 cursor-pointer">Most Recent (Asc)</div>
                                        <div className="p-2 hover:bg-lime-400 cursor-pointer">Most Recent (Desc)</div>
                                    </div>
                                    </div>
                                    <div className="relative  desk:w-2/12">
                                    <div className="flex items-center relative justify-between">
                                        <div className="flex items-center w-4/12 space-x-3">
                                            <div className="flex items-center space-x-2">
                                                <i className="gal:text-sm fa fa-location"></i>
                                                <div className="gal:text-sm">Location</div>
                                            </div>
                                            <div className="flex border-2 items-center bg-white justify-between px-2 py-2">
                                                <div className="gal:text-sm desk:pr-36 gal:pr-20">Select</div>
                                                <i className="gal:text-sm fa fa-angle-down border-l-2 pl-3"></i>
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
                                </div>
                                <div className="ipad:hidde nestMax:flex-row nestMax:flex nestMax:items-center">
                                    <div className="relative desk:w-2/12">
                                        <div className="flex items-center relative justify-between">
                                        <div className="flex items-center w-4/12 space-x-3">
                                            <div className="flex items-center space-x-2">
                                                <i className="fa fa-location gal:text-sm"></i>
                                                <div className="truncate gal:text-sm">Job Type</div>
                                            </div>
                                            <div className="flex border-2 items-center bg-white justify-between px-2 py-2">
                                                <div className="desk:pr-36 gal:pr-20">Select</div>
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
                                    <div className="relative desk:w-2/12">
                                    <div className="flex items-center relative justify-between">
                                        <div className="flex items-center w-4/12 space-x-3">
                                            <div className="flex items-center space-x-2">
                                                <i className="fa fa-location gal:text-sm"></i>
                                                <div className="truncate gal:text-sm">Industry</div>
                                            </div>
                                            <div className="flex border-2 items-center bg-white justify-between px-2 py-2">
                                                <div className="desk:pr-36 gal:pr-20">Select</div>
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
                    </div>
                    <div className="space-y-6 mt-5 gal:px-4 nestMax:px-20 desk:px-0">
                        <div className="flex ipad:flex-row ipad:space-y-0 ipad:space-x-6 justify-center desk:flex-row gal:flex-col desk:space-x-4 gal:space-y-4 desk:space-y-0 items-center">
                            <div className="border-2 p-4 desk:w-5/12 gal:w-full rounded-lg"> {/** Card */}
                                <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">SPEED_EXAM_TEST</div>
                                        <div>Lorem Excellentiam Dev</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut gal:mt-4 desk:mt-0 right-0 gal:flex desk:block space-x-4">
                                                <button className="p-2 bg-slate-100 gal:flex desk:block gal:items-center text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs gal:flex gal:items-center gal:truncate space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center gal:truncate text-xs space-x-2 rounded-lg px-4">
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
                            <div className="border-2 p-4 desk:w-5/12 gal:w-full rounded-lg"> {/** Card */}
                            <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">SPEED_EXAM_TEST</div>
                                        <div>Access Bank PLC</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut gal:flex gal:items-center gal:mt-3 right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center gal:truncate text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center gal:truncate text-xs space-x-2 rounded-lg px-4">
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

                        <div className="flex ipad:flex-row ipad:space-y-0 ipad:space-x-6 justify-center desk:flex-row gal:flex-col desk:space-x-4 gal:space-y-4 desk:space-y-0 items-center">
                            <div className="border-2 p-4 desk:w-5/12 gal:w-full rounded-lg"> {/** Card */}
                                <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">Access Bank ELTP Retail (April_2024)</div>
                                        <div>Access Bank PLC</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut gal:mt-4 gal:flex gal:items-center right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 gal:flex gal:items-center gal:truncate rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs gal:flex gal:items-center gal:truncate space-x-2 rounded-lg px-4">
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
                            <div className="border-2 p-4 desk:w-5/12 gal:w-full rounded-lg"> {/** Card */}
                            <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-green-500 h-[30px] w-[120px]">Open</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">Access Bank ELTP Retail (Amb)</div>
                                        <div>Access Bank PLC</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut gal:flex gal:mt-4 gal:items-center right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center gal:truncate text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center gal:truncate text-xs space-x-2 rounded-lg px-4">
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
                        
                        <div className="flex ipad:flex-row ipad:space-y-0 ipad:space-x-6 justify-center desk:flex-row gal:flex-col desk:space-x-4 gal:space-y-4 desk:space-y-0 items-center">
                            <div className="border-2 p-4 desk:w-5/12 gal:w-full rounded-lg"> {/** Card */}
                                <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">Youthrive Program</div>
                                        <div>Access Bank PLC</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut gal:mt-4 right-0 gal:flex gal:items-center space-x-4">
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 gal:flex gal:items-center rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 text-xs space-x-2 gal:flex gal:items-center gal:truncate rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center gal:truncate text-xs space-x-2 rounded-lg px-4">
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
                            <div className="border-2 p-4 desk:w-5/12 gal:w-full rounded-lg"> {/** Card */}
                            <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">Youthrive Access Bank (ELTP Retail)</div>
                                        <div>Access Bank PLC</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut gal:flex gal:mt-4 gal:items-center right-0 space-x-4">
                                                <button className="p-2 gal:flex gal:items-center bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 gal:flex gal:truncate gal:items-center bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 gal:flex gal:truncate gal:items-center bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-clock"></i>
                                                    <span>3d ago</span>
                                                </button>
                                            </div>
                                            <div className="absolut gal:flex gal:items-center flex justify-end right-0 mt-4">
                                                <Link to="/">View Details</Link>
                                                <i className="fa fa-arrow"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex ipad:flex-row ipad:space-y-0 ipad:space-x-6 justify-center desk:flex-row gal:flex-col gal:space-y-4 desk:space-y-0 desk:space-x-4 items-center">
                            <div className="border-2 p-4 desk:w-5/12 gal:w-full rounded-lg"> {/** Card */}
                                <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold text-2xl">Access Bank ELTP Retail.</div>
                                        <div>Lorem Excellentiam Dev</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut gal:mt-4 right-0 gal:flex gal:items-center space-x-4">
                                                <button className="p-2 gal:flex gal:items-center gal:truncate bg-slate-100 text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center gal:truncate text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center gal:truncate text-xs space-x-2 rounded-lg px-4">
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
                            <div className="border-2 p-4 desk:w-5/12 gal:w-full rounded-lg"> {/** Card */}
                            <div className="block pl-1 text-white text-xs pt-1 -ml-6 job-batch-card bg-red-500 h-[30px] w-[120px]">Closed</div>
                                <div className="mt-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold  text-2xl">Interns Internal Recruitment</div>
                                        <div>Lorem Excellentiam Dev</div>
                                    </div>
                                    <div className="relative flex justify-end">
                                        <div>
                                            <div className="absolut gal:mt-4 gal:flex gal:items-center right-0 space-x-4">
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center gal:truncate text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-location"></i>
                                                    <span>Lagos</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center gal:truncate text-xs space-x-2 rounded-lg px-4">
                                                    <i className="fa fa-bag"></i>
                                                    <span>ELTP Retail</span>
                                                </button>
                                                <button className="p-2 bg-slate-100 gal:flex gal:items-center gal:truncate text-xs space-x-2 rounded-lg px-4">
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

                        <div className="flex items-center desk:justify-end gal:justify-end desk:px-40">
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