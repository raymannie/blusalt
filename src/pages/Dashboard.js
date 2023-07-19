import HeaderNav from "../components/HeaderNav";
import MainContent from "../components/MainContent";
import SideNav from "../components/SideNav";

const Dashboard = () => {
    return (
        <div className="main-body">
            <SideNav />
            <div className="content-body">
                <HeaderNav />
                <MainContent />
            </div>
        </div>
    );
}

export default Dashboard;