import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import {AboutPage, HomePage, ProfilePage} from "./pages"

const baseName = import.meta.env.VITE_SITE_BASE

const router = createBrowserRouter([
	{
		path: '/profile',
		element: <ProfilePage/>,
		index: true
	},
	{
		path: '/about',
		element: <AboutPage/>,
		index: true
	},
	{
		path: '*', // <-- for any not specified routes (404)
		element: <HomePage/>,
		index: true
	},
], {basename: baseName || ''})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<h2>Simple GitHub Pages-hosted SPA PoC</h2>
		<RouterProvider router={router}/>
	</React.StrictMode>,
)
