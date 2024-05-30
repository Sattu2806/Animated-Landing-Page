import FuelType from "@/app/data/FuelType";
import { AmountContext } from "@/context/AmountContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import Image from "next/image";
import React, { useContext, useState } from "react";

const Fuel = () => {
	const [selectFuelType, setSelectFuelType] = useState<any>();
	const [quantity, setQuantity] = useState<number>(0); // Add state for quantity
	const { directionData, setDirecrtionData } = useContext(DirectionDataContext);
	const { Amount, setAmount } = useContext(AmountContext);

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "NGN",
		}).format(amount);
	};

	const getCost = (charges: any) => {
		const cost = charges * quantity + directionData.routes[0].distance * 0.075;
		return formatCurrency(cost);
	};

	const getDeliveryFee = () => {
		const fee = directionData.routes[0].distance * 0.075;
		return formatCurrency(fee);
	};

	return (
		<div className="mt-6 ">
			<h2 className="font-semibold text-gray-500 text-sm">How many liters? </h2>
			<input
				type="number"
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
				placeholder="liters"
				className="bg-gray-900 p-1 text-sm border-[1px] w-full max-w-[10rem] rounded-md outline-none focus:border-yellow-300 mt-2"
			/>{" "}
			{/* Add input field for quantity */}
			<div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
				{FuelType.map((item, index) => (
					<div
						key={index}
						className={`mt-4 m-2 p-2 border-[1px] rounded-md flex flex-col justify-center items-center hover:border-yellow-400 cursor-pointer hover:scale-[1.02] ${
							index == selectFuelType ? "border-yellow-400 border-[2px]" : null
						}`}
						onClick={() => {
							setSelectFuelType(index);
							setAmount(item.charges);
						}}
					>
						<Image src={item.image} alt={item.name} width={50} height={50} />
						<h2 className="text-[12px] float-start mt-1">{item.name}</h2>
						{directionData.routes ? (
							<span className="float-right text-[10px] mt-1">
								{item.charges}
							</span>
						) : null}
					</div>
				))}
			</div>
			{selectFuelType !== undefined && (
				<div className="mt-4 text-xs ">
					<h2 className="font-semibold text-gray-500 text-sm">Order Details</h2>
					<div className="text-right m-2 ">
						<p className="border-b p-1  border-gray-700">
							<span className="text-yellow-100">Fuel Type:</span>{" "}
							{FuelType[selectFuelType].name}
						</p>
						<p className="border-b p-1  border-gray-700">
							{" "}
							per Liter: {FuelType[selectFuelType].charges}
						</p>
						<p className="border-b p-1  border-gray-700">
							Delivery fee: {getDeliveryFee()}
						</p>
						<p className="border-b p-1  border-gray-700">
							Total: {getCost(FuelType[selectFuelType].charges)}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Fuel;
