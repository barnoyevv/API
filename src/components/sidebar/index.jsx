import { NavLink, useLocation } from "react-router-dom"
import "./index.css"
import routes from "../../router/routes";

const Sidebar = () => {
	const {pathname} = useLocation();
	return (
		<header>
			<h1 className="text-primary">Ideal Cleaning</h1>
			<ul>
				{
					routes?.map((item, index) =>(
						<li key={index} className="list-unstyled">
							<NavLink
							to={item.path}
							className={
								item.path === pathname
								? item.active
								: "text-white bg-primary"
							}>
								{item.content}
							</NavLink>
						</li>
					))	
				}
			</ul>
		</header>
	)
}

export default Sidebar
