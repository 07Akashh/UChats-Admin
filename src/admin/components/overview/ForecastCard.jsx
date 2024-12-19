import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp } from 'lucide-react';
import { PiChatCircleFill } from "react-icons/pi";


const ForecastCard = () => {
	return (
		<motion.div
		className='backdrop-blur-md shadow-sm h-full text-white/90  max-w-md rounded-xl p-6'
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ delay: 0.3 }}
		style={{
			background: "linear-gradient(180deg, #15B79F 0%, #0E9382 100%)" ,boxShadow: "0px 0px 0px 1px #0000000F",
		}}
	>
			<div className="flex items-center gap-2 mb-4">
				<PiChatCircleFill />
				<span className="text-sm font-medium uppercase tracking-wide">Forecasts</span>
			</div>

			<div className="space-y-6 text-white">
				<div>
					<div className="flex items-center gap-2">
						<span className="text-[56px] font-normal">+15%</span>
						<TrendingUp className="w-8 h-8" />
					</div>
					<p className="text-sm font-Inter mt-1">
						forecasted increase in your sales closed by the end of the current month
					</p>
				</div>

				<div>
					<div className="flex items-center gap-2">
						<span className="text-[56px] font-normal">+20%</span>
						<TrendingUp className="w-8 h-8" />
					</div>
					<p className="text-sm mt-1">
						forecasted increase in consultations by the end of the current month
					</p>
				</div>
			</div>
		</motion.div >
	);
};

export default ForecastCard;