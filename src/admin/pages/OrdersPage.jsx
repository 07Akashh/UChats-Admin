import { CheckCircle, IndianRupee, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";

const generateMockOrders = () => {
    const mockOrders = [];

    const randomValue = (min, max) => parseFloat((Math.random() * (max - min) + min).toFixed(2));

    const addOrder = (date) => {
        mockOrders.push({
            date: date.toISOString().split("T")[0],
            value: randomValue(100, 2000),
            timeSpent: Math.floor(Math.random() * 5) + 1,
            commission: randomValue(10, 200),
        });
    };

    const now = new Date();

    for (let i = 0; i < 365; i++) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        addOrder(date);
    }

    for (let i = 1; i <= 30; i++) {
        const date = new Date(now);
        date.setDate(date.getDate() + i);
        addOrder(date);
    }

    const specificDates = [
        new Date(now),
        new Date(now.setDate(now.getDate() - 7)),
        new Date(now.setDate(now.getDate() - 30))
    ];

    specificDates.forEach(addOrder);

    return mockOrders;
};

const mockOrders = generateMockOrders();
const filterOrdersByPeriod = (orders, period) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const periodDays = {
        "1 Day": 1,
        "7 Days": 7,
        "30 Days": 30,
        "365 Days": 365,
    };

    const days = periodDays[period] || 7;
    return orders.filter((order) => {
        const orderDate = new Date(order.date);
        orderDate.setHours(0, 0, 0, 0);
        const diffDays = (now - orderDate) / (1000 * 60 * 60 * 24);
        return diffDays >= 0 && diffDays < days;
    });
};


const OrdersPage = () => {
    const [stats, setStats] = useState({});
    const [trends, setTrends] = useState({});
    const [selectedPeriod, setSelectedPeriod] = useState("7 Days");

    useEffect(() => {
        const filteredOrders = filterOrdersByPeriod(mockOrders, selectedPeriod);
        console.log("Filtered Orders:", filteredOrders);
    
        const totalOrdersValue = filteredOrders.reduce((sum, order) => sum + order.value, 0);
        const totalTimeSpent = filteredOrders.reduce((sum, order) => sum + order.timeSpent, 0);
        const totalCommission = filteredOrders.reduce((sum, order) => sum + order.commission, 0);
    
        const trends = {
            totalOrders: totalOrdersValue * 0.1,
            completedOrders: totalTimeSpent * 0.2,
            overallTotalSales: totalCommission * 0.15,
        };
    
        setStats({
            totalOrders: totalOrdersValue,
            completedOrders: totalTimeSpent,
            overallTotalSales: totalCommission,
        });
        setTrends(trends);
    }, [selectedPeriod]);
    

    return (
        <div className="flex-1 relative z-0 overflow-auto">
            <main className="max-w-7xl mx-auto py-6 border rounded-xl my-5 px-4 bg-[#FFFFFF] shadow-md backdrop-blur-lg">
                <div className="flex justify-between mb-5 px-2">
                    <h2 className="text-3xl">At a glance</h2>
                    <select
                        value={selectedPeriod}
                        onChange={(e) => setSelectedPeriod(e.target.value)}
                        className="border border-gray-300 rounded-md px-4 py-2 text-sm shadow-md hover:shadow-lg transition-all duration-300 bg-white focus:outline-none"
                    >
                        {["1 Day", "7 Days", "30 Days", "365 Days"].map((period) => (
                            <option
                                key={period}
                                value={period}
                                className="bg-white text-gray-700 hover:bg-gray-100 focus:bg-gray-200 transition-colors duration-200"
                            >
                                {period}
                            </option>
                        ))}
                    </select>
                </div>
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard
                        name="Total Orders Value"
                        icon={ShoppingBag}
                        value={`₹${stats?.totalOrders?.toFixed(2)}`}
                        trends={trends.totalOrders}
                    />
                    <StatCard
                        name="Total Time Spent"
                        icon={CheckCircle}
                        value={`${stats?.completedOrders} hrs`}
                        trends={trends.completedOrders}
                    />
                    <StatCard
                        name="Total Commission"
                        icon={IndianRupee}
                        value={`₹${stats?.overallTotalSales?.toFixed(2)}`}
                        trends={trends.overallTotalSales}
                    />
                </motion.div>
                <div className="flex justify-between my-5 px-2">
                    <h2 className="text-3xl">Insights</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <DailyOrders />
                    <OrderDistribution />
                </div>
                <div className="flex justify-between my-5 px-2">
                    <h2 className="text-3xl">Orders</h2>
                </div>
                <OrdersTable />
            </main>
        </div>
    );
};

export default OrdersPage;
