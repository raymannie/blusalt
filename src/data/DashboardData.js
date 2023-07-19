import { PiClockCounterClockwise } from "react-icons/pi"
import { RiCheckDoubleLine } from "react-icons/ri"
import { AiOutlineShop } from "react-icons/ai"
import { FaUsers } from "react-icons/fa"

export const reportList = [
    {
        title: 'Pending Requests',
        numbers: '1,478,218',
        percentage: 4.07,
        duration: 'Last month',
        icon: <PiClockCounterClockwise />,
        color: '#2f49d1',
        status: 'increase',
    },
    {
        title: 'Approved Requests',
        numbers: '478,520',
        percentage: '0.24',
        duration: 'Last month',
        icon: <RiCheckDoubleLine />,
        color: '#ffb648',
        status: 'increase',
    },
    {
        title: 'Total Agents',
        numbers: '154,872',
        percentage: '1.64',
        duration: 'Last month',
        icon: <AiOutlineShop />,
        color: '#9473f1',
        status: 'decrease',
    },
    {
        title: 'Total Users',
        numbers: '167',
        percentage: '0.00',
        duration: 'Last month',
        icon: <FaUsers />,
        color: '#4cde97',
        status: 'balance',
    },
]

export const tableData = [
    {
        name: 'Micheal Olu',
        email: 'michealolu@mmail.com',
        type: 'New Agent',
        status: 'pending',
        date: '23/04/18'
    },
    {
        name: 'Chioma James',
        email: 'alexa@mail.com',
        type: 'Account Deactivation',
        status: 'pending',
        date: '23/04/18'
    },
    {
        name: 'Boluwatife Ade',
        email: 'laure@mail.comm',
        type: 'New user',
        status: 'active',
        date: '13/04/19'
    },
    {
        name: 'Mariam Eric',
        email: 'mariam@mail.com',
        type: 'Email Auth',
        status: 'active',
        date: '03/04/21'
    },
]