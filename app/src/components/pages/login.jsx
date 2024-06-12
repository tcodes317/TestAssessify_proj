import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

export default function login(){
    return(
        <>
            <Header />
            <div className="relative mt-16">
                <div className="shadow-lg p-16 w-10/12 mt-44 mb-16 mx-auto">
                    <div className="space-y-6 shadow-lg w-6/12 px-10">
                        <h1 className="text-4xl font-semi-bold">Good morning</h1>
                        <p className="text-xl text-slate-600">Please sign into your account</p>
                        <form action="" className="space-y-6" method="post">
                            <div>
                                <label for="email">Email Address</label>
                                <div className="flex items-center w-full">
                                    <i className="fa fa-message px-3 border-2 py-7 rounded-tl-xl rounded-bl-xl border-r-0"></i>
                                    <input type="search" placeholder="email.." className="p-6 rounded-tr-xl rounded-br-xl w-full focus:outline-none border-2" />
                                </div>
                            </div>
                            <div>
                                <label for="password">Password</label>
                                <div className="flex items-center w-full">
                                    <i className="fa fa-lock px-3 border-2 py-7 rounded-tl-xl rounded-bl-xl border-r-0"></i>
                                    <div className="flex items-center border-2 w-full rounded-tr-xl rounded-br-xl">
                                        <input type="password" placeholder="password.." className="p-6 w-full focus:outline-none" />
                                        <i className="fa fa-eye px-3"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button className="text-white bg-green-500 px-44 p-2 shadow-lg">
                                    <span>Login</span>
                                </button>
                            </div>
                        </form>
                        <nav>
                            <a href="" className="font-semibold underline" hreflang="en">Forgot Password?</a>
                        </nav>
                        <div className="w-full py-6 pb-12 flex justify-center">Don't have an account? <a href="" className="font-semibold ml-2 underline" hreflang="en">Register</a></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}