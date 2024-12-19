import React from 'react';
import { motion } from "framer-motion";
import { PiChatTeardropFill } from "react-icons/pi";

import {
	ResponsiveContainer,
	ComposedChart,
	Line,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
} from 'recharts';

const chartData = [
	{ name: 'Mon', Answered: 590, ExpertsOnline: 800, Incoming: 1400 },
	{ name: 'Tue', Answered: 868, ExpertsOnline: 967, Incoming: 1506 },
	{ name: 'Wed', Answered: 1397, ExpertsOnline: 1098, Incoming: 989 },
	{ name: 'Thu', Answered: 1480, ExpertsOnline: 1200, Incoming: 1228 },
	{ name: 'Fri', Answered: 1520, ExpertsOnline: 1108, Incoming: 1100 },
	{ name: 'Sat', Answered: 1400, ExpertsOnline: 680, Incoming: 1700 },
	{ name: 'Sun', Answered: 1400, ExpertsOnline: 680, Incoming: 1700 },
];

const ConsultationOverviewChart = () => {

	return (
		<motion.div
			className='bg-white backdrop-blur-md border shadow-sm rounded-xl p-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-sm font-semibold mb-4 text-[#667085] flex items-center'>
				<PiChatTeardropFill className="mr-2" />
				CONSULTATIONS
			</h2>
			<div className='h-80'>
				<ResponsiveContainer>
					<ComposedChart
						data={chartData}
					>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(255, 255, 255)",
								border: "none",
								boxShadow: "0 10px 60px 0px rgba(0, 0, 0, 0.5)",
								borderRadius: "10px"
							}}
						/>
						<Legend />
						<Line type="monotone" dataKey="Incoming" stroke="#8A94A6" strokeDasharray="5 5 5 5" strokeWidth={2} />
						<Line type="monotone" dataKey="Answered" stroke="#15B79F" strokeWidth={2}/>
						<Bar dataKey="ExpertsOnline" barSize={32} fill="#FFF3C6" radius={[5, 5, 0, 0]} />
					</ComposedChart>
				</ResponsiveContainer>
			</div>
		</motion.div >
	);
}

export default ConsultationOverviewChart;
