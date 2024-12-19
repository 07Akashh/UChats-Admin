import { useEffect, useState } from "react";
import { PiCheckFatFill, PiChatTeardropFill, PiTagFill, PiCoinsFill, PiCoinFill, PiPiggyBankFill } from "react-icons/pi";
import { motion } from "framer-motion";

import StatCard from "../components/common/StatCard";
import OrdersTable from "../components/orders/OrdersTable";
import PastPeriodChart from "../components/overview/PastPeriodChart";
import ConsultationOverviewChart from "../components/overview/ConsultationOverviewChart";
import ForecastCard from "../components/overview/ForecastCard";

const OverviewPage = () => {
    const [stats, setStats] = useState([]);
    const [trends, setTrends] = useState({});
    const [selectedPeriod, setSelectedPeriod] = useState("7 Days");

    useEffect(() => {
        const generateWeeklyStats = () => {
            const mockData = [];
            for (let i = 0; i < 7; i++) {
                mockData.push({
                    day: `Day ${i + 1}`,
                    consultation: Math.floor(Math.random() * 100) + 20,
                    orderPlaced: Math.floor(Math.random() * 100) + 10,
                    conversion: parseFloat((Math.random() * 10 + 5).toFixed(2)),
                    totalSalesValue: Math.floor(Math.random() * 50000) + 10000,
                    orderValue: Math.floor(Math.random() * 5000) + 1000,
                    commissionPaid: Math.floor(Math.random() * 5000) + 500,
                });
            }
            return mockData;
        };

        const data = generateWeeklyStats();
        setStats(data);

        const calculateWeeklyTrends = (stats) => {
            if (stats.length < 7) return {};

            const totalConsultation = stats.reduce((sum, day) => sum + day.consultation, 0);
            const totalOrderPlaced = stats.reduce((sum, day) => sum + day.orderPlaced, 0);
            const totalConversion = stats.reduce((sum, day) => sum + day.conversion, 0) / stats.length;
            const totalSalesValue = stats.reduce((sum, day) => sum + day.totalSalesValue, 0);
            const totalOrderValue = stats.reduce((sum, day) => sum + day.orderValue, 0);
            const totalCommissionPaid = stats.reduce((sum, day) => sum + day.commissionPaid, 0);

            const lastWeekStats = generateWeeklyStats();
            const lastWeekConsultation = lastWeekStats.reduce((sum, day) => sum + day.consultation, 0);
            const lastWeekOrderPlaced = lastWeekStats.reduce((sum, day) => sum + day.orderPlaced, 0);
            const lastWeekConversion = lastWeekStats.reduce((sum, day) => sum + day.conversion, 0) / lastWeekStats.length;
            const lastWeekSalesValue = lastWeekStats.reduce((sum, day) => sum + day.totalSalesValue, 0);
            const lastWeekOrderValue = lastWeekStats.reduce((sum, day) => sum + day.orderValue, 0);
            const lastWeekCommissionPaid = lastWeekStats.reduce((sum, day) => sum + day.commissionPaid, 0);

            const calculatePercentageChange = (current, previous) => {
                if (previous === 0) return "N/A";
                return (((current - previous) / previous) * 100).toFixed(2);
            };

            return {
                consultationTrend: calculatePercentageChange(totalConsultation, lastWeekConsultation),
                orderPlacedTrend: calculatePercentageChange(totalOrderPlaced, lastWeekOrderPlaced),
                conversionTrend: calculatePercentageChange(totalConversion, lastWeekConversion),
                salesValueTrend: calculatePercentageChange(totalSalesValue, lastWeekSalesValue),
                orderValueTrend: calculatePercentageChange(totalOrderValue, lastWeekOrderValue),
                commissionPaidTrend: calculatePercentageChange(totalCommissionPaid, lastWeekCommissionPaid),
            };
        };

        const trends = calculateWeeklyTrends(data);
        setTrends(trends);
    }, []);

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
                        <option
                            value="1 Day"
                            className="bg-white text-gray-700 hover:bg-gray-100 focus:bg-gray-200 transition-colors duration-200"
                        >
                            1 Day
                        </option>
                        <option
                            value="7 Days"
                            className="bg-white text-gray-700 hover:bg-gray-100 focus:bg-gray-200 transition-colors duration-200"
                        >
                            7 Days
                        </option>
                        <option
                            value="30 Days"
                            className="bg-white text-gray-700 hover:bg-gray-100 focus:bg-gray-200 transition-colors duration-200"
                        >
                            30 Days
                        </option>
                        <option
                            value="365 Days"
                            className="bg-white text-gray-700 hover:bg-gray-100 focus:bg-gray-200 transition-colors duration-200"
                        >
                            365 Days
                        </option>
                    </select>
                </div>
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name="Consultation" icon={PiChatTeardropFill} value={stats.reduce((sum, day) => sum + day.consultation, 0)} trends={trends.consultationTrend} />
                    <StatCard name="Orders Placed" icon={PiTagFill} value={stats.reduce((sum, day) => sum + day.orderPlaced, 0)} trends={trends.orderPlacedTrend} />
                    <StatCard name="Conversion" icon={PiCheckFatFill} value={`${(stats.reduce((sum, day) => sum + day.conversion, 0) / stats.length).toFixed(2)}%`} trends={trends.conversionTrend} />
                    <StatCard name="Total Sales Value" icon={PiCoinsFill} value={`₹${stats.reduce((sum, day) => sum + day.totalSalesValue, 0)}`} trends={trends.salesValueTrend} />
                    <StatCard name="Order Value" icon={PiCoinFill} value={`₹${stats.reduce((sum, day) => sum + day.orderValue, 0)}`} trends={trends.orderValueTrend} />
                    <StatCard name="Commission Paid" icon={PiPiggyBankFill} value={`₹${stats.reduce((sum, day) => sum + day.commissionPaid, 0)}`} trends={trends.commissionPaidTrend} />
                </motion.div>
                <div className="flex justify-between my-5 px-2">
                    <h2 className="text-3xl">Insights</h2>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 mb-8">
                    <div className="xl:col-span-3">
                        <ConsultationOverviewChart />
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <PastPeriodChart />
                        </div>
                        <div>
                            <ForecastCard />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between my-5 px-2">
                    <h2 className="text-3xl">Orders</h2>
                </div>
                <OrdersTable />
            </main>
        </div>
    );
};

export default OverviewPage;
