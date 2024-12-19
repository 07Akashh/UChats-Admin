import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div className="min-h-screen h-full font-Inter">
            <Toaster position="top-right" toastOptions={{
                style: { fontSize: '14px', fontWeight: '500', color: '#333' },
            }} />

            <div className="flex flex-col md:flex-row h-full">
                <aside className="w-[80px] fixed h-full bg-[#115e56] shadow-md">
                    <Sidebar />
                </aside>

                <main className="w-full ml-[80px] h-full flex flex-col">
                    <header className="mb-14 shadow-sm bg-white">
                        <Header />
                    </header>
                    <section className="flex-1 p-6">
                        <Outlet />
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Layout;
