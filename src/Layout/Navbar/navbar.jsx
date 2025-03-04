import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { RiShoppingCartFill } from "react-icons/ri";
// import useCart from "../../Hooks/useCart";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    // const [cart] = useCart()
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const navOptions = <>
        <Link to='/'><li className="cursor-pointer font-semibold text-xs text-slate-600 hover:ring-2 hover:ring-[#172a3a] duration-200 ease-in py-2 px-3 hover:rounded-md bg-transparent mx-3 uppercase font-roboto"><div>Home</div></li></Link>
        <Link to='/contactUs'><li className="cursor-pointer font-semibold text-xs text-slate-600 hover:ring-2 hover:ring-[#172a3a] duration-200 ease-in py-2 px-3 hover:rounded-md bg-transparent mx-3 uppercase font-roboto"><div>Contact Us</div></li></Link>
        <Link to='/menu'><li className="cursor-pointer font-semibold text-xs text-slate-600 hover:ring-2 hover:ring-[#172a3a] duration-200 ease-in py-2 px-3 hover:rounded-md bg-transparent mx-3 uppercase font-roboto"><div>Our Menu</div></li></Link>
        <Link to='/shop/salad'><li className="cursor-pointer font-semibold text-xs text-slate-600 hover:ring-2 hover:ring-[#172a3a] duration-200 ease-in py-2 px-3 hover:rounded-md bg-transparent mx-3 uppercase font-roboto"><div>Our Shop</div></li></Link>
        <Link to='/dashboard'><li className="cursor-pointer font-semibold text-xs text-slate-600 hover:ring-2 hover:ring-[#172a3a] duration-200 ease-in py-2 px-3 hover:rounded-md bg-transparent mx-3 uppercase font-roboto"><div>Dashboard</div></li></Link>

    </>


    const handleToggle = e => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }
    const handleLogOut = () => {
        logout()
            .then(
                navigate('/')
            )

    }
    return (
        <div className='navbar fixed z-10 bg-[#0066ff]/10 bg-clip-padding blur-backdrop-filter px-4'>

            <div className="dropdown text-slate-600">
                <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1C3D5A]/30  w-52 ">
                    {navOptions}
                </ul>
            </div>
            <div className='ml-3 lg:ml-12 flex-1'>
                <div className='flex items-center'>
                    <Link to='/'><img className="w-40" src="https://iili.io/3dtoTJV.png" alt="" /></Link>
                </div>
            </div>
            <div className='flex'>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal">
                        {navOptions}
                    </ul>
                </div>
                <ul className='menu-horizontal px-1'>
                    

                    {
                        user ?
                            <li onClick={handleLogOut} className="cursor-pointer font-semibold text-xs text-slate-600 hover:ring-2 hover:ring-[#172a3a] duration-200 ease-in py-2 flex items-center px-3 hover:rounded-md bg-transparent mx-3 uppercase font-roboto">

                                Logout
                            </li>
                            :
                            <Link to='/login'>
                                <li className="cursor-pointer font-semibold text-xs text-slate-600 hover:ring-2 hover:ring-[#172a3a] duration-200 ease-in py-2 flex items-center px-3 hover:rounded-md bg-transparent mx-3 uppercase font-roboto">

                                    Login

                                </li>
                            </Link>
                    }
                </ul>

                {
                    user &&
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div className='w-10 rounded-full my-anchor-element ' title={user.email}>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                                />
                            </div>
                        </div>

                    </div>
                }
                <div>
                    <label className="swap swap-rotate text-end ml-3 md:mr-5">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true} />

                        {/* sun icon */}
                        <svg className="text-slate-600 swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="text-slate-600 swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;