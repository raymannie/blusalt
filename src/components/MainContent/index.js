import { reportList } from '../../data/DashboardData';
import ReportCard from './ReportCard';
import StatisticReport from './StatisticReport';
import UserReport from './UserReport';
import RequestReport from './RequestReport';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className='card-grid'>
                {reportList.map((list, index) => (
                    <ReportCard key={index} list={list} />
                ))}
            </div>
            <div className='card-grid2'>
                <StatisticReport />
                <UserReport />
                <RequestReport />
            </div>
        </div>
    );
}

export default MainContent;