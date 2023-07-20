import Graph from "../../images/graph.png";
import styled from 'styled-components';

const StatisticReport = () => {
    const DotStat = styled.p`
        display: flex ;
        align-items: center;
        font-size: 14px;
        &:before{
            display: inline-block;
            width: 8px;
            height: 8px;
            content: '';
            border-radius: 50%;
            margin-right: 8px;
            
            /* margin-left: -16px; */
            
            background-color: ${({ color }) => color};
        }
        /* color: ${({ color }) => color}; */
    `;
    return (
        <div className="statistic-card">
            <div className='card-head'>
                <div className='card-head-first'>
                    <h3>User Inflow Statistic</h3>
                    <p>Nov - July</p>
                </div>
                <div className="card-head-second">
                    <DotStat color="#5f2eea" className="card-head-title">Agents</DotStat>
                    <p className="card-head-number">473 273</p>
                </div>
                <div>
                    <DotStat color="#4cde97" className="card-head-title">Users</DotStat>
                    <p className="card-head-number">782 396</p>
                </div>
            </div>
            <div className="statistic-card_graph">
                <img src={Graph} alt="graphs" />
            </div>
        </div>
    );
}

export default StatisticReport;