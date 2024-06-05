"use client";
import React from "react";
import { motion } from "framer-motion";
import Icon from "../Icon";
import { NavMenu } from "./NavMenu";

type Props = {};

function Navbar({}: Props) {
	return (
		<div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-10 pb-5 flex items-center  font-light text-zinc-300 sticky top-0 backdrop-blur-md z-40">
			<div className="overflow-hidden ">
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<a href="/" className="z-50 flex items-center space-x-1">
						<Icon name="home" className="w-6 h-6" />
						<span className="font-bold text-2xl uppercase text-white text-u">
							Auto
							<span className="text-yellow-500">Refuel</span>
						</span>
					</a>
				</motion.div>
			</div>
			<div >
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className="flex ml-32 space-x-3"
				>
                    <NavMenu />
                </motion.div>
			</div>
			<div className="md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-menu"
				>
					<line x1="4" x2="20" y1="12" y2="12" />
					<line x1="4" x2="20" y1="6" y2="6" />
					<line x1="4" x2="20" y1="18" y2="18" />
				</svg>
			</div>
		</div>
	);
}

export default Navbar;
