import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const userGrowthData = [
	{ month: "Jan", users: 1000 },
	{ month: "Feb", users: 1500 },
	{ month: "Mar", users: 2000 },
	{ month: "Apr", users: 3000 },
	{ month: "May", users: 4000 },
	{ month: "Jun", users: 5000 },
];

const UserGrowthChart = () => {
	return (
		<motion.div
			className='bg-white backdrop-blur-md shadow-sm border rounded-xl p-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-medium text-black mb-4'>User Growth</h2>
			<div className='h-[320px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart data={userGrowthData}>
						{/* <CartesianGrid strokeDasharray='3 3' stroke='#374151' /> */}
						<XAxis dataKey='month' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
						contentStyle={{
								backgroundColor: "rgba(255, 255, 255)",
								border: "none",
								boxShadow:"0 10px 60px 0px rgba(0, 0, 0, 0.5)",
								borderRadius:"10px"
							}}
							itemStyle={{ color: "gray" }}
						/>
						<Line
							type='monotone'
							dataKey='users'
							stroke='#DB4444'
							strokeWidth={2}
							dot={{ fill: "#DB4444", strokeWidth: 2, r: 0 }}
							
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default UserGrowthChart;
