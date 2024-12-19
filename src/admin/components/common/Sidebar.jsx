import { NavLink, useResolvedPath } from "react-router-dom";
import { TbLeaf2 } from "react-icons/tb";

import { RiLogoutBoxRFill } from "react-icons/ri";
import { PiHouseFill, PiChatTeardropFill, PiUsersFourFill } from "react-icons/pi";

import toast from "react-hot-toast";

const Sidebar = () => {
    const handleLogout = () => {
        localStorage.removeItem('adminToken')
        window.location.reload();
    };

    const { pathname } = useResolvedPath('');

    const matchDashboard = pathname === '/dashboard';
    const matchChats = pathname === '/chats';
    const matchCustomers = pathname === '/customers';

    const showLogoutToast = () => {
        toast((t) => (
            <div className="flex flex-col items-center p-3 space-y-4">
                <p className="text-md">Are you sure you want to logout?</p>
                <div className="flex space-x-4">
                    <button
                        className="px-5 py-2 bg-[#115e56] text-white rounded"
                        onClick={() => {
                            handleLogout();
                            toast.dismiss(t.id);
                        }}
                    >
                        Logout
                    </button>
                    <button
                        className="px-5 py-2 bg-gray-300 rounded"
                        onClick={() => toast.dismiss(t.id)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ), {
            duration: 5000,
            position: 'top-center',
        });
    };

    return (
        <>
            <nav className="h-screen justify-center text-black/50 text-sm text-center font-light font-Poppins">
                <ul className="space-y-4 my-[24px] font-normal">
                    <li>
                        <div className="flex mx-auto items-center justify-center h-14 w-14 rounded-lg bg-black" style={{
                            background: "linear-gradient(81deg, #3FDCCDCF 0%, #09544D 150%)",
                        }}>
                            <TbLeaf2 className="text-3xl text-white" />
                        </div>
                    </li>
                    <li className="py-8 w-12 mx-auto">
                        <hr className="opacity border-[#134E48] " />
                    </li>
                    <li >
                        <NavLink
                            to="/dashboard"
                            className={`flex mx-auto items-center transition-all duration-300 justify-center h-14 w-14 rounded-lg ${matchDashboard ? 'bg-white hover:bg-white/90 text-[#115e56] font-normal shadow-md backdrop-blur-md' : 'text-white/90 hover:bg-white/20'}`}
                        >
                            <PiHouseFill className="text-3xl" />
                        </NavLink>
                    </li>
                    <li >
                        <NavLink
                            to="/chats"
                            className={`flex mx-auto items-center transition-all duration-300 justify-center h-14 w-14 rounded-lg ${matchChats ? 'bg-white hover:bg-white/90 text-[#115e56] font-normal shadow-md backdrop-blur-md' : 'text-white/90 hover:bg-white/20'}`}
                        >
                            <PiChatTeardropFill className="text-3xl" />
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            to="/customers"
                            className={`flex mx-auto items-center transition-all duration-300 justify-center h-14 w-14 rounded-lg ${matchCustomers ? 'bg-white hover:bg-white/90 text-[#115e56] font-normal shadow-md backdrop-blur-md' : 'text-white/90 hover:bg-white/20'}`}
                        >
                            <PiUsersFourFill className="text-3xl" />
                        </NavLink>
                    </li>
                    <li>
                        <button
                            onClick={showLogoutToast}
                            className=" h-14 w-14 rounded-lg transition-all duration-300 hover:bg-white/20 focus:bg-white focus:text-[#115e56] text-white/90  active:bg-[#f0f0f0] active:text-[#115e56] focus:outline-none"
                        >
                            <RiLogoutBoxRFill className="text-3xl m-auto align-middle " />
                        </button>

                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;




