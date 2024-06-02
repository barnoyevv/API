import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import App from "../App"
import {Posts} from "../pages/index"
const Index = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<App/>}>
				<Route index element={<Posts/>}/>
			</Route>
		)
	);
	return <RouterProvider router={router}/>
}

export default Index
