import { IoIosTrendingDown } from "react-icons/io"
import { IoIosTrendingUp } from "react-icons/io"
import styled from 'styled-components';

const ReportCard = ({ list }) => {
    const ReportIcon = styled.div`
        background-color: ${({ color }) => `${color}21`};
        color: ${({ color }) => color};
    `;
    const Trending = styled.p`
        color: ${({ color }) => color};
        margin-right: 8px;
    `
    return (
        <div className="report-card" >
            <ReportIcon className="report-card-icon" color={list.color}>
                {list.icon}
            </ReportIcon>
            <div className='text-holder'>
                <h2>{list.numbers}</h2>
                <p>{list.title}</p>
                <div className='status'>
                    {
                        list.status === 'increase'
                            ? <Trending trending color='#4cde97'>
                                <IoIosTrendingUp />
                                {list.percentage}
                                %
                            </Trending>
                            : list.status === 'decrease'
                                ? <Trending className="trending" color='#f16464'>
                                    <IoIosTrendingDown />
                                    {list.percentage}
                                    %
                                </Trending>
                                : <Trending className="trending" color='#ffb648'>
                                    <IoIosTrendingDown />
                                    {list.percentage}
                                    %
                                </Trending>
                    }
                    <p>{' '}{list.duration}</p>
                </div>
            </div>
        </div>
    );
}

export default ReportCard;