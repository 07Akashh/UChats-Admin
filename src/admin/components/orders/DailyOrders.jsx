import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const dailyOrdersData = [
	{ date: "07/01", orders: 45 },
	{ date: "07/02", orders: 52 },
	{ date: "07/03", orders: 49 },
	{ date: "07/04", orders: 60 },
	{ date: "07/05", orders: 55 },
	{ date: "07/06", orders: 58 },
	{ date: "07/07", orders: 62 },
];

const DailyOrders = () => {
	return (
		<motion.div
			className='bg-white backdrop-blur-md shadow-sm border rounded-xl p-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-xl font-medium text-black mb-4'>Daily Orders</h2>

			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={dailyOrdersData}>
						{/* <CartesianGrid strokeDasharray='3 3' stroke='#374151' /> */}
						<XAxis dataKey='date' stroke='#9CA3AF' />
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
						<Legend />
						<Line type='monotone' dataKey='orders' stroke='#DB4444'
							dot={{ fill: "#DB4444", strokeWidth: 1, r: 0 }} strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default DailyOrders;
