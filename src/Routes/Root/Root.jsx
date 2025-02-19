import { Outlet } from "react-router-dom";

const Root = () => {
    // const Location= useLocation()
    // const noHeaderFooter= Location.pathname.includes('login') || Location.pathname.includes('register')
    return (
        <div>
            {/* navbar */}
            {/* {noHeaderFooter || <Navbar></Navbar>} */}

            {/* Outlet section */}
            <div className="min-h-[calc(100vh-343px)]">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            {/* {noHeaderFooter || <Footer></Footer>} */}
        </div>
    );
};

export default Root;