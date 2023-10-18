import Logo from "../Logo";
import NavItem from "./NavItem";

const NavBar = () => {
	return (
		<div className="w-full h-screen bg-white flex flex-col items-center pt-10 pb-10 px-2">
			<Logo />
			<div className="flex flex-col items-center mt-8 justify-between h-full">
				<div className="flex flex-col gap-y-10">
					<NavItem
						path="/"
						image="home.svg"
					/>
					<NavItem
						path="/shop"
						image="shop.svg"
					/>
					<NavItem
						path="/"
						image="cart.svg"
					/>
				</div>
				<div className="flex flex-col justify-self-end gap-y-10">
					<NavItem
						path="/"
						image="settings.svg"
					/>
					<NavItem
						path="/"
						image="logOut.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
