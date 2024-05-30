import React from "react";
import  AutoAddress  from '@/components/booking/AutoAddress';
import Fuel from "./Fuel";

const Booking = () => {
	return (
		<div className="px-3 p">
			<h2 className=" font-semibold text-lg">Booking</h2>
			<div className="border-[1px] mt-4 p-5 rounded-md h-[78vh]">
                <AutoAddress />
				<Fuel />
            </div>
		</div>
	);
};

export default Booking;
