import "./Sidebar.css";
import { RiDashboardFill, RiUser3Fill, RiUserAddLine } from 'react-icons/ri';
import { ImCreditCard } from 'react-icons/im';
import { GoSignOut } from 'react-icons/go';
import { FcBusinessman } from 'react-icons/fc';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
	return (
		<div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
			<div className="sidebar__title">

				
			</div>

			<div className="sidebar__menu">
				<div className="sidebar__link active_menu_link">
					<RiDashboardFill
						style={{ color: "white", fontSize: "1.2em", marginRight: "1.2em" }}
					/>
					<a href="#">Dashboard</a>
				</div>
				<div className="sidebar__link">
					<RiUser3Fill
						style={{ color: "black", fontSize: "1.2em", marginRight: "1.2em" }}
					/>
					<a href="#">New Customer</a>
				</div>
				<div className="sidebar__link">
					<ImCreditCard
						style={{ color: "black", fontSize: "1.2em", marginRight: "1.2em" }}
					/>
					<a href="#">Transaction</a>
				</div>
				<div className="sidebar__link">
					<RiUserAddLine
						style={{ color: "black", fontSize: "1.2em", marginRight: "1.2em" }}
					/>
					<a href="#">Users</a>
				</div>

				<div className="sidebar__logout">
					<FcBusinessman
						style={{ fontSize: "3em", marginRight: "0.5em" }}
					/>
					<a href="#">Johnsmith@gmail.com</a>
					<GoSignOut
						style={{ color: "white", fontSize: "1.2em", marginLeft: "5px" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
