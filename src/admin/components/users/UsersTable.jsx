import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";


const demoUsers = [
	{ _id: "1", firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "123-456-7890" },
	{ _id: "2", firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", phone: "987-654-3210" },
	{ _id: "3", firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com", phone: "555-555-5555" },
	{ _id: "4", firstName: "Bob", lastName: "Brown", email: "bob.brown@example.com", phone: "444-444-4444" },
	{ _id: "5", firstName: "Charlie", lastName: "Davis", email: "charlie.davis@example.com", phone: "333-333-3333" },
	{ _id: "6", firstName: "David", lastName: "Wilson", email: "david.wilson@example.com", phone: "222-222-2222" },
	{ _id: "7", firstName: "Emma", lastName: "Taylor", email: "emma.taylor@example.com", phone: "111-111-1111" },
	{ _id: "8", firstName: "Frank", lastName: "Anderson", email: "frank.anderson@example.com", phone: "666-666-6666" },
	{ _id: "9", firstName: "Grace", lastName: "Thomas", email: "grace.thomas@example.com", phone: "777-777-7777" },
	{ _id: "10", firstName: "Hannah", lastName: "Moore", email: "hannah.moore@example.com", phone: "888-888-8888" },
	{ _id: "11", firstName: "Ivy", lastName: "Martin", email: "ivy.martin@example.com", phone: "999-999-9999" },
	{ _id: "12", firstName: "Jack", lastName: "Lee", email: "jack.lee@example.com", phone: "000-000-0000" },
];

const UsersTable = () => {

	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(demoUsers);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = demoUsers.filter(
			(user) => user?.firstName?.toLowerCase()?.includes(term) || user?.email?.toLowerCase()?.includes(term)
		);
		setFilteredUsers(filtered);
	};

	return (
		<motion.div
			className='bg-white border backdrop-blur-md shadow-sm rounded-xl p-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-medium text-black'>Users</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search Users...'
						className='bg-gray-100 border text-black placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444]'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto h-[500px] overflow-auto no-scrollbar'>
				<table className='min-w-full divide-y divide-gray-700 '>
					<thead className=" sticky bg-[#DCDFE4]/70 text-[#667085]">
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Email
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Role
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Phone
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-300'>
						{filteredUsers.map((user) => (
							<motion.tr
								key={user?._id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='flex items-center'>
										<div className='flex-shrink-0 h-10 w-10'>
											<div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
												{user?.firstName?.charAt(0).toUpperCase()}
											</div>
										</div>
										<div className='ml-4'>
											<div className='text-sm font-normal text-[#555f7e]'>{user?.firstName} {user?.lastName}</div>
										</div>
									</div>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='text-sm text-[#555f7e]'>{user?.email}</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<span className='px-2 inline-flex text-xs leading-5 font-normal rounded-full bg-blue-800 text-blue-100'>
										User
									</span>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-normal rounded-full`}
									>
										{user?.phone || 'N/A'}
									</span>
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>Edit</button>
									<button className='text-red-400 hover:text-red-300'>Delete</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default UsersTable;
