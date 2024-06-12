import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

export default function NotFound(){
    return(
        <>
            <Header />
            <div className="py-80">
                <h1 className="text-center font-bold text-red-600 text-xl">Error 404: Page not Found</h1>
            </div>
            <Footer />
        </>
    )
}