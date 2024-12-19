import { NavLink, useResolvedPath } from "react-router-dom";
import { RiPieChart2Fill } from "react-icons/ri";
import { PiTagFill, PiChatTeardropFill } from "react-icons/pi";

const Header = () => {
	const { pathname } = useResolvedPath("");

	const matchDashboard = pathname === "/dashboard";
	const matchChats = pathname === "/chats";
	const matchSales = pathname === "/customers";

	return (
		<header className="backdrop-blur-md bg-white fixed shadow w-full z-50">
			<div className="max-w-8xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
				<ul className="flex gap-6">
					<li>
						<NavLink
							to="/dashboard"
							className={`${matchDashboard ? "bg-[#CCFBEF] text-black" : "text-[#8A94A6] hover:bg-gray-100 hover:text-black"} py-2 px-4 rounded-full transition-all flex items-center gap-2`}
						>
							<RiPieChart2Fill size={20} className="self-center" /> Summary
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/customers"
							className={`${matchSales ? "bg-[#CCFBEF] text-black" : "text-[#8A94A6] hover:bg-gray-100 hover:text-black"} py-2 px-4 rounded-full transition-all flex items-center gap-2`}
						>
							<PiTagFill size={20} className="self-center" /> Sales
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/chats"
							className={`${matchChats ? "bg-[#CCFBEF] text-black" : "text-[#8A94A6] hover:bg-gray-100 hover:text-black"} py-2 px-4 rounded-full transition-all flex items-center gap-2`}
						>
							<PiChatTeardropFill size={20} className="self-center" /> Chat
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
