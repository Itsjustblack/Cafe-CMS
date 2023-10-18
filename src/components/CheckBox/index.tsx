import { FC } from "react";

interface Props {
	option: string;
}

const CheckBox: FC<Props> = ({ option }) => {
	return (
		<div
			key={option}
			className="gap-x-[10px] flex items-center cursor-pointer"
		>
			<input
				type="radio"
				id={option}
				value={option}
			/>
			<label
				htmlFor={option}
				className="text-sm lg:text-base xl:text-lg lg:leading-normal leading-5"
			>
				{option}
			</label>
		</div>
	);
};

export default CheckBox;
