import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import PageContainer from "../components/PageContainer";

const riceOptions = [
	{ value: 500, label: "Fried Rice" },
	{ value: 450, label: "Jollof Rice" },
	{ value: 700, label: "Chinese Rice" },
];

const drinkOptions = [
	{ value: 500, label: "Bigi Cola" },
	{ value: 450, label: "Bigi Tropical" },
	{ value: 700, label: "Fanta" },
];

const breadEggOptions = [
	{ value: 500, label: "1/2 Loaf and 2 Eggs" },
	{ value: 450, label: "1 Loaf and 3 Eggs" },
	{ value: 700, label: "1/2 Loaf and 3 Eggs" },
];

const wafflesOptions = [
	{ value: 500, label: "2 Circles and 2 Eggs" },
	{ value: 450, label: "3 Circles and 2 Eggs" },
	{ value: 700, label: "1 Square and 3 Eggs" },
];

const Shop = () => {
	const {
		handleSubmit,
		control,
		formState: { isValid },
	} = useForm();

	const onSubmit = (data: unknown) => {
		console.log(data);
	};

	return (
		<PageContainer className="bg-[#f8f8f8] px-10 ">
			<h1 className="font-bitter text-5xl font-semibold text-center mt-10">Bashan Store</h1>
			<section className="mt-10">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-10 font-montserrat"
				>
					<div className="flex justify-around gap-x-10">
						<div className="w-[400px]">
							<label
								htmlFor=""
								className="text-xl font-medium mb-1 block"
							>
								Rice
							</label>
							<Controller
								name="Rice"
								control={control}
								rules={{ required: true }}
								render={({ field: { onChange, value, name, ref } }) => (
									<Select
										ref={ref}
										name={name}
										value={riceOptions.find((c) => c.value === value)}
										onChange={(selectedOption) => {
											onChange(selectedOption);
										}}
										options={riceOptions}
									/>
								)}
							/>
						</div>
						<div className="w-[400px]">
							<label
								htmlFor=""
								className="text-xl font-medium mb-1 block"
							>
								Drinks
							</label>
							<Controller
								name="Drinks"
								control={control}
								rules={{ required: true }}
								render={({ field: { onChange, value, name, ref } }) => (
									<Select
										ref={ref}
										name={name}
										value={drinkOptions.find((c) => c.value === value)}
										onChange={(selectedOption) => {
											onChange(selectedOption);
										}}
										options={drinkOptions}
									/>
								)}
							/>
						</div>
					</div>
					<div className="flex justify-around gap-x-10">
						<div className="w-[400px]">
							<label
								htmlFor=""
								className="text-xl font-medium mb-1 block"
							>
								Bread & Egg
							</label>
							<Controller
								name="Bread-Egg"
								control={control}
								rules={{ required: true }}
								render={({ field: { onChange, value, name, ref } }) => (
									<Select
										ref={ref}
										name={name}
										value={breadEggOptions.find((c) => c.value === value)}
										onChange={(selectedOption) => {
											onChange(selectedOption);
										}}
										options={breadEggOptions}
									/>
								)}
							/>
						</div>
						<div className="w-[400px]">
							<label
								htmlFor=""
								className="text-xl font-medium mb-1 block"
							>
								Waffles
							</label>
							<Controller
								name="Waffles"
								control={control}
								rules={{ required: true }}
								render={({ field: { onChange, value, name, ref } }) => (
									<Select
										ref={ref}
										name={name}
										value={wafflesOptions.find((c) => c.value === value)}
										onChange={(selectedOption) => {
											onChange(selectedOption);
										}}
										options={wafflesOptions}
									/>
								)}
							/>
						</div>
					</div>
					<div className="flex justify-center mt-10">
						<button
							type="submit"
							className={`${isValid ? "bg-blue-700" : "bg-black"} w-[500px] h-[50px] text-2xl text-white font-semibold rounded-lg`}
						>
							Save Order
						</button>
					</div>
				</form>
			</section>
		</PageContainer>
	);
};

export default Shop;
