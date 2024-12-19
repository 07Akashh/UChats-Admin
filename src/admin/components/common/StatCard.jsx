import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, MoveRight } from 'lucide-react';

const StatCard = ({ name, icon: Icon, value, trends }) => {
	return (
		<motion.div
			className='bg-[#FFFFFF] border overflow-hidden rounded-xl '
			initial= {{ boxShadow: "0 2px 5px -4px rgba(0, 0, 0, 0.2)"}}
			whileHover={{ y: -5, boxShadow: "0 2px 20px 0px rgba(0, 0, 0, 0.2)" }}
		>
			<div className='px-4 space-y-2 py-5 sm:p-4 sm:py-6'>
				<span className='flex items-center text-xs font-medium text-[#667085] '>
					<Icon size={16} className='mr-2 text-[#667085]' />
					{name}
				</span>
				<p className='mt-1 text-3xl font-semibold text-black'>{value}</p>
				<span className="flex items-center text-sm font-normal">
					{trends < 0 ? (
						<>
							<TrendingDown size={20} className="mr-2 text-red-500" />
							<span className="text-red-500 mr-1">{trends}%</span><span>decreased</span>
						</>
					) : trends > 0 ? (
						<>
							<TrendingUp size={20} className="mr-2 text-green-500" />
							<span className="text-green-500 mr-1">{trends}%</span><span>increased</span>
						</>
					) : (
						<>
							<MoveRight size={20} className="mr-2 text-[#667085]" />
							<span className="text-[#667085] mr-1">{trends}%</span><span>static</span>
						</>
					)}
				</span>

			</div>
		</motion.div>
	);
};
export default StatCard;
