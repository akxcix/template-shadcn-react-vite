import { Outlet } from "react-router-dom";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Root() {
    return (
        <div id="root">
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="py-6">
                    <Outlet />
                </div>
                <div className="grow"/>
                <Footer />
            </div>

        </div>
    );
}
