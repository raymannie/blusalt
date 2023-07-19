import Graph from "../../images/graph.png";
const StatisticReport = () => {
    return (
        <div className="statistic-card">
            <div className='card-head'>
                <div className='card-head-first'>
                    <h3>User Inflow Statistic</h3>
                    <p>Nov - July</p>
                </div>
                <div>
                    <p className="card-head-title">Agents</p>
                    <p className="card-head-number">Nov - July</p>
                </div>
                <div>
                    <p className="card-head-title">Users</p>
                    <p className="card-head-number">Nov - July</p>
                </div>
            </div>
            <div className="statistic-card_graph">
                <img src={Graph} alt="graphs" />
            </div>
        </div>
    );
}

export default StatisticReport;