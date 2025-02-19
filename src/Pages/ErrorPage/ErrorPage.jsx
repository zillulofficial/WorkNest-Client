import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className="flex justify-center">
                <img className="" src="https://i.postimg.cc/PfLnkxKz/404.gif" alt="" />
            </div>
            <div className="text-center">
                <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-5xl">Hmm, that didn't work.</h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

                <div className="flex items-center mt-6 gap-x-3 justify-center">
                    
                    <button onClick={handleBackButton} className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#1F2937] text-white">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1F2937] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-[#1F2937] transition duration-300 group-hover:text-white ease flex items-center gap-2"><FaArrowLeftLong className="text-xl"></FaArrowLeftLong>Go back</span>
                    </button>

                    <Link to='/'>
                        <button className="relative inline-flex items-center justify-center py-3 pl-8 pr-8 overflow-hidden font-semibold text-[#1F2937] transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-8 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1F2937] group-hover:h-full"></span>

                            <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white">Take me home</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;