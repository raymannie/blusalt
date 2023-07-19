import { FiSearch } from "react-icons/fi";
import { BiSolidSun } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Profile from "../images/profile.png";


const HeaderNav = () => {
    return (
        <>
            <div className="header-nav">
                <div className="header-nav_menu">
                    <AiOutlineMenu />
                </div>
                <h2 className="header-nav_title-desktop">Dashboard</h2>
                <div className="header-nav_right">
                    <div className="search-input">
                        <span className="icon">
                            <FiSearch fontSize={'20px'} color="" />
                        </span>
                        <input type="text" placeholder="Enter text ..." />
                    </div>
                    <div className="lang-dropdwn">
                        <span>EN</span>
                        <BsChevronDown />
                    </div>
                    <div className="mode round-button">
                        <BiSolidSun fontSize={'20px'} />
                    </div>
                    <div className="mode round-button">
                        <IoNotifications fontSize={'20px'} />
                    </div>
                    <div className="profile-img">
                        <img className="" src={Profile} alt="profile" />
                    </div>
                </div>
            </div>
            <h2 className="header-nav_title-mobile">Dashboard</h2>
        </>
    );
}

export default HeaderNav;