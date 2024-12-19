import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";



const formatDate = (date) => {
	const d = new Date(date);
	const year = d.getFullYear();
	const month = String(d.getMonth() + 1).padStart(2, '0');
	const day = String(d.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
};

const demoOrders = [
	{
		_id: "order001",
		product: "Smartphone",
		timeSpent: "30 mins",
		totalAmount: 599.99,
		commission: 59.99,
		status: "Delivered",
		createdAt: "2024-06-15T10:00:00Z",
	},
	{
		_id: "order002",
		product: "Laptop",
		timeSpent: "1 hour",
		totalAmount: 299.49,
		commission: 29.49,
		status: "Processing",
		createdAt: "2024-06-16T12:30:00Z",
	},
	{
		_id: "order003",
		product: "Headphones",
		timeSpent: "45 mins",
		totalAmount: 899.99,
		commission: 89.99,
		status: "Shipped",
		createdAt: "2024-06-17T09:15:00Z",
	},
	{
		_id: "order004",
		product: "Tablet",
		timeSpent: "25 mins",
		totalAmount: 1199.0,
		commission: 119.0,
		status: "Received",
		createdAt: "2024-06-18T14:45:00Z",
	},
	{
		_id: "order005",
		product: "Smartwatch",
		timeSpent: "15 mins",
		totalAmount: 499.99,
		commission: 49.99,
		status: "Cancelled",
		createdAt: "2024-06-19T08:00:00Z",
	},
	{
		_id: "order006",
		product: "Smartphone",
		timeSpent: "30 mins",
		totalAmount: 599.99,
		commission: 59.99,
		status: "Delivered",
		createdAt: "2024-06-15T10:00:00Z",
	},
	{
		_id: "order007",
		product: "Laptop",
		timeSpent: "1 hour",
		totalAmount: 299.49,
		commission: 29.49,
		status: "Processing",
		createdAt: "2024-06-16T12:30:00Z",
	},
	{
		_id: "order009",
		product: "Headphones",
		timeSpent: "45 mins",
		totalAmount: 899.99,
		commission: 89.99,
		status: "Shipped",
		createdAt: "2024-06-17T09:15:00Z",
	},
	{
		_id: "order008",
		product: "Tablet",
		timeSpent: "25 mins",
		totalAmount: 1199.0,
		commission: 119.0,
		status: "Received",
		createdAt: "2024-06-18T14:45:00Z",
	},
	{
		_id: "order0020",
		product: "Smartwatch",
		timeSpent: "15 mins",
		totalAmount: 499.99,
		commission: 49.99,
		status: "Cancelled",
		createdAt: "2024-06-19T08:00:00Z",
	},
	{
		_id: "order0041",
		product: "Smartphone",
		timeSpent: "30 mins",
		totalAmount: 599.99,
		commission: 59.99,
		status: "Delivered",
		createdAt: "2024-06-15T10:00:00Z",
	},
	{
		_id: "order0042",
		product: "Laptop",
		timeSpent: "1 hour",
		totalAmount: 299.49,
		commission: 29.49,
		status: "Processing",
		createdAt: "2024-06-16T12:30:00Z",
	},
	{
		_id: "order0043",
		product: "Headphones",
		timeSpent: "45 mins",
		totalAmount: 899.99,
		commission: 89.99,
		status: "Shipped",
		createdAt: "2024-06-17T09:15:00Z",
	},
	{
		_id: "order0044",
		product: "Tablet",
		timeSpent: "25 mins",
		totalAmount: 1199.0,
		commission: 119.0,
		status: "Received",
		createdAt: "2024-06-18T14:45:00Z",
	},
	{
		_id: "order0045",
		product: "Smartwatch",
		timeSpent: "15 mins",
		totalAmount: 499.99,
		commission: 49.99,
		status: "Cancelled",
		createdAt: "2024-06-19T08:00:00Z",
	},
];

const OrdersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState(demoOrders);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = demoOrders.filter(
			(order) => order?._id?.toLowerCase().includes(term) || order?.product.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	return (
		<motion.div
			className='bg-white backdrop-blur-md border font-Inter shadow-sm rounded-xl p-6 '
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex justify-end items-center mb-6'>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search orders...'
						className='bg-gray-100 border text-black placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none '
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto h-[500px] no-scrollbar'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead className=" sticky bg-[#DCDFE4]/70 text-[#667085]">
						<tr>
							<th className='px-6 py-3 text-left font-normal text-xs uppercase tracking-wider'>
								Product
							</th>
							<th className='px-6 py-3 text-left font-normal text-xs uppercase tracking-wider'>
								Date
							</th>
							<th className='px-6 py-3 text-left font-normal text-xs uppercase tracking-wider'>
								Time Spent
							</th>
							<th className='px-6 py-3 text-left font-normal text-xs uppercase tracking-wider'>
								Order Value
							</th>
							<th className='px-6 py-3 text-left font-normal text-xs uppercase tracking-wider'>
								Commission
							</th>
							<th className='px-6 py-3 text-left font-normal text-xs uppercase tracking-wider'>

							</th>
						</tr>
					</thead>
					<tbody className='divide divide-y divide-gray-300 '>

						{filteredOrders?.map((order) => (
							<motion.tr
								key={order?._id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}

							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-normal text-[#555F7E]'>
									{order?.product}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-normal text-[#555F7E]'>
									{formatDate(order?.createdAt)}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-normal text-[#555F7E]'>
									{order?.timeSpent}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-normal text-[#555F7E]'>
									₹{order?.totalAmount}
								</td>
								<td className='px-6 py-4 font-semibold whitespace-nowrap text-sm text-[#555F7E]'>
									₹{order?.commission}
								</td>
								<td className="px-6 py-4 flex justify-end whitespace-nowrap text-right text-sm text-[#555F7E]">
									<button className="flex  items-center text-xs gap-1 text-gray-400 hover:text-gray-500 transition-all duration-200">
										View Chat
										<GoArrowUpRight className="w-5 h-5" />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default OrdersTable;
