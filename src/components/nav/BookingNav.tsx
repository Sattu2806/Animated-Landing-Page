import { UserButton } from "@clerk/nextjs";
import React from "react";

const BookingNav = () => {
	return (
		<div className="w-full  px-4 sm:px-8 lg:px-10 pt-8 pb-3 flex items-center  font-light  text-zinc-300 sticky top-0 backdrop-blur-md z-20">
			<div className="overflow-hidden ">
				<a href="/" className="z-50 flex items-center space-x-1">
					<span className="font-bold text-2xl uppercase text-white text-u">
						Auto<span className="text-yellow-500">Refuel</span>
					</span>
				</a>
			</div>
			<div className="flex ml-32 space-x-6">
				<a href="/booking" className="text-white">
					Home
				</a>
				<a href="/booking/confirm" className="text-white">
					History
				</a>
			</div>
			<div className="flex ml-auto space-x-6">
				<UserButton />
			</div>
		</div>
	);
};

export default BookingNav;
