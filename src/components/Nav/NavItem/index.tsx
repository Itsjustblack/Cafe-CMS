import { motion } from "framer-motion";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { interactionAnimations } from "../../../utils/framer-default-animations";

interface Props {
	image: string;
	path: string;
	data?: number;
}

const NavItem: FC<Props> = ({ image, path, data }) => {
	const navigate = useNavigate();
	return (
		<motion.div
			{...interactionAnimations}
			className="relative"
		>
			<motion.img
				className="cursor-pointer relative w-6 h-6 opacity-70"
				onClick={() => navigate(path)}
				src={`/assets/${image}`}
			/>
			{data && data > 0 && <p className="w-[20px] h-[20px] bg-[#AF9E7F] rounded-full absolute top-0 left-[25px] text-[12px] text-white flex items-center justify-center price">{data}</p>}
		</motion.div>
	);
};

export default NavItem;
