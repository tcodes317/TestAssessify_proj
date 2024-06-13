import logo from "./../../assets/TestAssessify_logo.716313a17e97567aeba5.png";
function Footer(){
    return(
        <>
            <div className="desk:flex gal:px-6 gal:py-8 desk:space-x-8 desk:space-y-4 desk:py-12" id="footer">
                <div className="desk:space-y-12 desk:w-full desk:flex desk:flex-col desk:items-center">
                    <div className="desk:w-3/12 gal:mb-8 gal:w-8/12">
                        <img src={logo} srcset={logo} />
                    </div>
                    <div className="desk:text-sm desk:ml-44 gal:w-9/12 desk:w-5/12">&copy; TestAssessify 2022. All rights reserved.</div>
                    <div className="desk:hidden gal:block">Registered office ois at 35, Ladipo Labinjo Cresent, Surulere.</div>
                </div>
                <div className="desk:flex gal:flex gal:mt-4 gal:flex-col gal:!items-start desk:!items-center desk:flex-col desk:!text-left desk:space-y-4 desk:text-sm desk:w-full desk:!items-left">
                    <button className="desk:relative desk:text-lg font-semibold desk:-left-4">
                        <span>About Us</span>
                        <i className="fa fa-angle-right gal:text-sm desk:text-sm desk:ml-3 gal:ml-3"></i>
                    </button>
                    <button className="desk:relative desk:left-1 gal:text-md desk:!text-lg font-semibold desk:text-sm">
                        <span>For Companies</span>
                        <i className="fa fa-angle-right desk:text-sm gal:text-sm gal:ml-3 desk:ml-3"></i>
                    </button>
                    <button className="desk:relative desk:text-lg desk:-left-5 desk:-left-4 font-semibold">
                        <span>Find Jobs</span>
                        <i className="fa fa-angle-right gal:ml-3 desk:text-sm gal:text-sm desk:ml-3"></i>
                    </button>
                    <button className="desk:relative desk:-left-7 desk:text-lg desk:-left-9 font-semibold">
                        <span>FAQs</span>
                        <i className="fa fa-angle-right desk:text-sm gal:text-sm gal:ml-3 font-bold desk:ml-3"></i>
                    </button>
                </div>
                <div className="desk:w-full desk:text-xl desk:space-y-10">
                    <p className="gal:font-semibold">Connect With Us On:</p>
                    <div className="gal:mt-6 desk:mt-0">
                        <div className="desk:flex gal:flex desk:space-x-20 gal:space-x-14 gal:items-center desk:items-center desk:space-x-8">
                            <i className="fab fa-linkedin gal:my-4 desk:my-0 text-3xl text-blue-500"></i>
                            <i className="fab fa-twitter gal:my-4 desk:my-0 text-3xl text-blue-600"></i>
                            <i className="fab fa-instagram gal:my-4 desk:my-0 text-3xl text-red-700"></i>
                        </div>
                        <div className="desk:flex gal:flex gal:items-center desk:items-center">
                            <i className="fa fa-phone"></i>
                            <p className="desk:ml-3 gal:text-lg gal:ml-2 desk:ml-0 desk:text-md">+234 702 658 5852</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;