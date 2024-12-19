import React from 'react';
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaSignal } from "react-icons/fa";


const data = [
	{ name: 'This Week', OrderClosed: 10, Consultation: 40, amt: 2400 },
	{ name: 'Last Week', OrderClosed: 20, Consultation: 30, amt: 2210 },
];

const PastPeriodChart = () => {
	return (
		<motion.div
			className='bg-white backdrop-blur-md shadow-sm border rounded-xl p-6 xl:px-3 xl:py-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>

			<h2 className='text-sm font-semibold mb-4 text-[#667085] flex items-center'>
				<FaSignal className="mr-2" />
				VS PAST PERIOD
			</h2>

			<div className='h-80 w-full'>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart
						data={data}
						margin={{
							left:-35
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis
							tick={{ fill: '#667085', fontSize: '10px' }}
						/>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(255, 255, 255)",
								border: "none",
								boxShadow: "0 10px 60px 0px rgba(0, 0, 0, 0.5)",
								borderRadius: "10px"
							}}
						/>
						<Legend />
						<Bar dataKey="Consultation" barSize={32} fill="#CCFBEF" radius={[5, 5, 0, 0]} />
						<Bar dataKey="OrderClosed" barSize={32} fill="#134E48" radius={[5, 5, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default PastPeriodChart;
