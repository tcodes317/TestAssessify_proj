import logo from "./../../assets/TestAssessify_logo.716313a17e97567aeba5.png";
function Footer(){
    return(
        <>
            <div className="flex space-x-8 space-y-4 py-12" id="footer">
                <div className="space-y-12 w-full flex flex-col items-center">
                    <div className="w-3/12">
                        <img src={logo} srcset={logo} />
                    </div>
                    <div className="text-sm ml-40">&copy; TestAssessify 2022. All rights reserved.
                    </div>
                </div>
                <div className="flex flex-col !text-left space-y-4 text-sm w-full !items-left">
                    <button className="relative -left-4">
                        <span>About Us</span>
                        <i className="fa fa-angle-right text-sm ml-3"></i>
                    </button>
                    <button className="relative">
                        <span>For Companies</span>
                        <i className="fa fa-angle-right text-sm ml-3"></i>
                    </button>
                    <button className="relative -left-4">
                        <span>Find Jobs</span>
                        <i className="fa fa-angle-right text-sm ml-3"></i>
                    </button>
                    <button className="relative -left-7">
                        <span>FAQs</span>
                        <i className="fa fa-angle-right text-sm ml-3"></i>
                    </button>
                </div>
                <div className="w-full space-y-10">
                    <p>Connect With Us On:</p>
                    <div className="">
                        <div className="flex items-center space-x-8">
                            <i className="fab fa-linkedIn"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="flex items-center">
                            <i className="fa fa-phone"></i>
                            <p className="ml-3">+234 702 658 5852</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;