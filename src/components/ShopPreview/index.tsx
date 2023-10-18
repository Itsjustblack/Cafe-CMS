import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
	name: string;
	image: string;
	path: string;
}

const ShopPreview: FC<Props> = ({ name, image, path }) => {
	return (
		<Link to={path}>
			<div className="relative w-[320px] h-[200px] shadow-md flex justify-center items-center bg-white rounded-2xl overflow-hidden group">
				<img
					src={image}
					className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 ease-linear"
					alt=""
				/>
				<div className="absolute">
					<span className="text-5xl font-semibold text-white">{name}</span>
				</div>
			</div>
		</Link>
	);
};

export default ShopPreview;
