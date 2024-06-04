import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import App from "../App"
import {Posts, Comments, Albums, Photos, Todos, Users} from "../pages/index"
const Index = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<App/>}>
				<Route index element={<Posts/>}/>
				<Route path="/comments" element={<Comments/>}/>
				<Route path="/albums" element={<Albums/>}/>
				<Route path="/photos" element={<Photos/>}/>
				<Route path="/todos" element={<Todos/>}/>
				<Route path="/users" element={<Users/>}/>
			</Route>
		)
	);
	return <RouterProvider router={router}/>
}

export default Index
