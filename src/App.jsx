import React from 'react'
import {Header, Sidebar} from "./components/index"
import { Outlet } from 'react-router-dom'
import "./App.css"
const App = () => {
	return (
		<div className='main-layout'>
			<Sidebar/>
			<div className='main-right'>
				<Header/>
				<main>
					<Outlet/>
				</main>
			</div>
		</div>
	)
}

export default App
