import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import OrdersPage from './pages/OrdersPage';
import OverviewPage from './pages/OverviewPage';
import UsersPage from './pages/UsersPage';

const Admin = () => {
    return (
        <div className=' z-0'>
            <Routes>
                <Route path="*" element={<Layout />}>
                    <Route
                        path=""
                        element={
                            <Navigate to="dashboard" replace />
                        }
                    />
                    <Route
                        path="dashboard"
                        element={
                            <OverviewPage />
                        }
                    />
                    <Route
                        path="chats"
                        element={
                            <OrdersPage />
                        }
                    />
                    <Route
                        path="customers"
                        element={
                            <UsersPage />
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default Admin;
