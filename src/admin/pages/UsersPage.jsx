import { useState, useEffect } from "react";
import { UserCheck, UserPlus, UsersIcon } from "lucide-react";
import { motion } from "framer-motion";

import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";

const generateStats = (period) => {
	let totalUsers = 0;
	let newUsersToday = 0;
	let activeUsers = 0;

	switch (period) {
		case "1 Day":
			totalUsers = Math.floor(Math.random() * 1000) + 5000;
			newUsersToday = Math.floor(Math.random() * 200) + 50;
			activeUsers = Math.floor(Math.random() * 100) + 500;
			break;
		case "7 Days":
			totalUsers = Math.floor(Math.random() * 2000) + 5000;
			newUsersToday = Math.floor(Math.random() * 800) + 200;
			activeUsers = Math.floor(Math.random() * 600) + 1000;
			break;
		case "30 Days":
			totalUsers = Math.floor(Math.random() * 5000) + 10000;
			newUsersToday = Math.floor(Math.random() * 1500) + 400;
			activeUsers = Math.floor(Math.random() * 1500) + 2000;
			break;
		case "365 Days":
			totalUsers = Math.floor(Math.random() * 20000) + 25000;
			newUsersToday = Math.floor(Math.random() * 3000) + 1000;
			activeUsers = Math.floor(Math.random() * 5000) + 3000;
			break;
		default:
			totalUsers = 0;
			newUsersToday = 0;
			activeUsers = 0;
	}

	return { totalUsers, newUsersToday, activeUsers };
};

const calculateTrend = (current, previous) => {
	if (previous === 0) return 0;
	return ((current - previous) / previous) * 100;
};

const UsersPage = () => {
	const [stats, setStats] = useState({ totalUsers: 10, newUsersToday: 8, activeUsers: 6 });
	const [trends, setTrends] = useState({ totalUsers: 15, newUsersToday: 6, activeUsers: 7 });
	const [selectedPeriod, setSelectedPeriod] = useState("7 Days");
	useEffect(() => {
		const newStats = generateStats(selectedPeriod);

		setStats((prevStats) => {
			const trendData = {
				totalUsers: calculateTrend(newStats.totalUsers, prevStats.totalUsers),
				newUsersToday: calculateTrend(newStats.newUsersToday, prevStats.newUsersToday),
				activeUsers: calculateTrend(newStats.activeUsers, prevStats.activeUsers),
			};

			setTrends(trendData);
			return newStats;
		});
	}, [selectedPeriod]);

	return (
		<div className="flex-1 overflow-auto relative z-0">
			<main className="max-w-7xl mx-auto py-6 border rounded-xl my-5 px-4 bg-[#FFFFFF] shadow-md backdrop-blur-lg">
				<div className="flex justify-between mb-5 px-2">
					<h2 className="text-3xl">At a glance</h2>
					<select
						value={selectedPeriod}
						onChange={(e) => setSelectedPeriod(e.target.value)}
						className="border border-gray-300 rounded-md px-4 py-2 text-sm shadow-md hover:shadow-lg transition-all duration-300 bg-white focus:outline-none"
					>
						<option value="1 Day">1 Day</option>
						<option value="7 Days">7 Days</option>
						<option value="30 Days">30 Days</option>
						<option value="365 Days">365 Days</option>
					</select>
				</div>
				<motion.div
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name="Total Users"
						icon={UsersIcon}
						value={stats?.totalUsers?.toLocaleString()}
						trends={trends.totalUsers.toFixed(2)}
					/>
					<StatCard
						name="New Users Today"
						icon={UserPlus}
						value={stats?.newUsersToday}
						trends={trends.newUsersToday.toFixed(2)}
					/>
					<StatCard
						name="Active Users"
						icon={UserCheck}
						value={stats?.activeUsers?.toLocaleString()}
						trends={trends.activeUsers.toFixed(2)}
					/>
				</motion.div>
				<div className="flex justify-between my-5 px-2">
					<h2 className="text-3xl">Users</h2>
				</div>
				<UsersTable />
				<div className="flex justify-between my-5 px-2">
					<h2 className="text-3xl">Insights</h2>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
					<UserGrowthChart />
					<UserActivityHeatmap />
					<UserDemographicsChart />
				</div>
			</main>
		</div>
	);
};

export default UsersPage;
