import './ChooseUser.css';
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { FaBuildingNgo } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";

function ChooseUser() {
    return (
        <div className="chooseUserDiv">
            <div className='CUtoggle'>
                <h2 className='Chooseh2'> Login </h2>
            </div>
            <div className="cu-buttons-div">
                <span className='cu-buttons-div-span'>
                    <p><FaUserFriends /></p>
                    <Link to="/LoginUser">
                        <button className='Citizenbtn'>Citizen</button>
                    </Link>
                </span>
                <span className='cu-buttons-div-span'>
                    <p><FaBuildingNgo /></p>
                    <button className='Ngobtn'>NGO</button>
                </span>
                <span className='cu-buttons-div-span'>
                    <p><MdAdminPanelSettings /></p>
                    <button className='Adminbtn'>Admin</button>
                </span>
            </div>
        </div>
    )
}

export default ChooseUser;