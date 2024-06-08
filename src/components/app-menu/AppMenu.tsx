import './AppMenu.css'
import {NavLink, redirect, useSearchParams} from "react-router-dom"
import {useEffect} from "react"

const baseName = import.meta.env.VITE_SITE_BASE

export const AppMenu = () => {
	const [searchParams] = useSearchParams();

	useEffect(() => {
		if (searchParams?.get('path')?.includes(baseName)) {
			const redirectUrl = searchParams?.get('path')?.split('/').pop()

			if (redirectUrl) {
				console.log('redirect', baseName + '/' + redirectUrl)
				redirect(baseName + '/' + redirectUrl);
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
