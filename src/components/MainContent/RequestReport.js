import { BiChevronRight } from "react-icons/bi"
import styled from 'styled-components';
import { tableData } from "../../data/DashboardData";
import Profile from "../../images/profile.png";

const RequestReport = () => {
    const StatusPill = styled.div`
        display: inline-block;
        font-size: 12px;
        border-radius: 10px;
        min-width: 70px;
        text-align: center;
        padding: 4px 8px;
        text-transform: capitalize;
        background-color: ${({ status }) => status === 'active' ? '#6bbb8621' : '#ffb64821'};
        color: ${({ status }) => status === 'active' ? '#6bbb86' : '#ffb648'};
    `;
    return (
        <div className="request-card ">
            <h3>Recent Request</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name/Email</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((list, index) => (<tr>
                        <td key={index}>
                            <div className="table-content">
                                <img className="table-img" src={Profile} alt="profile" />
                                <div>
                                    <h4>{list.name}</h4>
                                    <p>{list.email}</p>
                                </div>
                            </div>
                        </td>
                        <td>{list.type}</td>
                        <td><StatusPill status={list.status}>{list.status}</StatusPill></td>
                        <td>{list.date}</td>
                        <td>
                            <span className="table-arrow">
                                <BiChevronRight />
                            </span>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
}

export default RequestReport;