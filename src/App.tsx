import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
	return (
		<div className="grid grid-cols-[80px_auto] h-screen">
			<NavBar />
			<AnimatePresence mode="wait">
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/shop"
						element={<Shop />}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
