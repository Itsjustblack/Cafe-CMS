import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	image: string;
	path: string;
}

const NavItem: FC<Props> = ({ image, path }) => {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate(path)}
			className="fade p-2 rounded-md flex justify-center items-center"
		>
			<div className="relative w-6 h-6 opacity-70">
				<img
					src={`/assets/${image}`}
					alt=""
				/>
			</div>
		</button>
	);
};

export default NavItem;
