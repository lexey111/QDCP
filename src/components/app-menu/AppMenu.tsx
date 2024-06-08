import './AppMenu.css'
import {NavLink, useNavigate, useSearchParams} from "react-router-dom"
import {useEffect} from "react"

const baseName = import.meta.env.VITE_SITE_BASE

export const AppMenu = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (searchParams?.get('path')?.includes(baseName)) {
			const redirectUrl = searchParams?.get('path')?.split('/').pop()

			if (redirectUrl) {
				navigate('/' + redirectUrl);
			}
		}
	}, []);

	return (
		<div className={'app-menu'}>
			<NavLink to={'/home'}>Home</NavLink>
			<NavLink to={'/profile'}>Profile</NavLink>
			<NavLink to={'/about'}>About</NavLink>
		</div>
	)
}
