import { Link } from "react-router-dom";
import WemaLogo from "../images/wema-logo.svg";
import { GoHomeFill } from "react-icons/go"
import { BsChatLeftDotsFill } from "react-icons/bs"
import { FaFilePen } from "react-icons/fa6"
import { MdTextSnippet } from "react-icons/md"
import { FaFolderMinus } from "react-icons/fa6"
import { FaUsers } from "react-icons/fa"
import { RiSettings3Fill } from "react-icons/ri"


const SideNav = ({ isOpen, setIsOpen }) => {
    const navList = [
        {
            title: 'Dashboard',
            icon: <GoHomeFill />,
        },
        {
            title: 'Requests',
            icon: <BsChatLeftDotsFill />,
        },
        {
            title: 'KYCs',
            icon: <FaFilePen />,
            //MdTextSnippet
        },
        {
            title: 'Reports',
            icon: <MdTextSnippet />,
        },
        {
            title: 'Audit trails',
            icon: <FaFolderMinus />,
        },
        {
            title: 'Users',
            icon: <FaUsers />,
        },
        {
            title: 'Settings',
            icon: <RiSettings3Fill />,
        },
    ];
    return (
        <>
            <div className={`side-nav ${isOpen ? 'open' : ''}`}>
                <div className="side-nav_logo-container">
                    <img className="side-nav-logo" src={WemaLogo} alt="Wemma logo" />
                </div>
                <div className="side-nav_list-wrapper">
                    <ul>
                        {navList.map((list, index) => (
                            <li key={index}>
                                <Link className={index === 0 ? 'active' : ''} to="/">
                                    {list.icon}
                                    <span>{list.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="side-nav_bottom">
                    <div className="side-nav_bottom-img">

                    </div>
                    <div>
                        <p>Nafisa Sh.</p>
                        <span>Support manager</span>
                    </div>
                </div>
            </div>
            <div onClick={setIsOpen} className={`transbg ${isOpen ? 'open' : ''}`}></div>
        </>
    );
}

export default SideNav;