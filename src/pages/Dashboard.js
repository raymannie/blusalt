import { useState } from "react";
import HeaderNav from "../components/HeaderNav";
import MainContent from "../components/MainContent";
import SideNav from "../components/SideNav";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="main-body">
            <SideNav isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
            <div className="content-body">
                <HeaderNav isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
                <MainContent />
            </div>
        </div>
    );
}

export default Dashboard;