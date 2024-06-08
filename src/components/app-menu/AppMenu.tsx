import './AppMenu.css'
import {NavLink} from "react-router-dom"

export const AppMenu = () => {
	return (
		<div className={'app-menu'}>
			<NavLink to={'/home'}>Home</NavLink>
			<NavLink to={'/profile'}>Profile</NavLink>
			<NavLink to={'/about'}>About</NavLink>
		</div>
	)
}
