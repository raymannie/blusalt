import UserGraph from "../../images/user-graph.png";
const UserReport = () => {
    return (
        <div className="chart-card">
            <div className="statistic-card_graph">
                <img src={UserGraph} alt="user graph" />
            </div>
            <div>
                <h4>New Users</h4>
                <p>(+23%) less than lastweek</p>
            </div>
        </div>
    );
}

export default UserReport;