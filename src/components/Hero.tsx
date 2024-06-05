"use client";
import Image from "next/image";
import React from "react";
import HeroAnimation from "./HeroAnimation";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
	const wrapper = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
			},
		},
	};

	const list = {
		hidden: { opacity: 0, x: -100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: [0.455, 0.03, 0.515, 0.955],
				delay: 1,
			},
		},
	};
	const container = {
		visible: {
			transition: {
				staggerChildren: 0.025,
			},
		},
	};
	return (
		<div className="w-full px-4 sm:px-8 lg:px-16 pt-20">
			<div className="flex flex-col md:flex-row md:gap-x-6 lg:gap-x-0 xl:grid xl:grid-cols-2 mt-4">
				<div className="shrink-0 md:w-1/2 lg:w-7/12 xl:w-auto">
					<motion.h1
						initial="hidden"
						animate="visible"
						variants={container}
						className="text-4xl lg:text-5xl mb-8 font-semibold"
					>
						{/* <span className='text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block'>The best way to</span> */}
						<HeroAnimation
							text="Gas delivered"
							className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block"
						/>
						<HeroAnimation
							text="where and when"
							className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 inline-block"
						/>
						<HeroAnimation
							text="you need it !"
							className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block"
						/>
						{/* <span className='text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-violet-600 inline-block'>do clustering</span>
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block'>in TypeScript</span> */}
					</motion.h1>

					<motion.div
						initial={{ opacity: 0, scale: 0.7 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5, duration: 0.5 }}
					>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1 }}
							className="text-lg text-gray-500 mb-6"
						>
							We deliver gas to your doorstep at the best price. Order now and get it delivered
							in 30 minutes.

						</motion.p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, delay: 1.5 }}
						className="mt-10 flex flex-col items-center sm:flex-row gap-3"
					>
						<a
							href="/"
							className="inline-flex relative z-10 h-10 rounded-xl p-px shadow-lg bg-gradient-to-b from-white to-zinc-300"
						>
							<div className="flex items-center gap-1 px-6 font-medium rounded-xl whitespace-nowrap bg-white text-black">
								<span>Get Started</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									className="fill-current h-3.5 "
								>
									<path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path>
								</svg>
							</div>
						</a>
					</motion.div>
				</div>
				<div className="hidden md:block pt-3 shrink grow overflow-hidden z-10">
					<motion.div
						initial={{ opacity: 0, x: -300 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 1.5 }}
						className="relative"
					>
						<div className="relative p-px overflow-hidden  rounded-3xl sm:rounded-[2rem] ">
							<div className="rounded-3xl sm:rounded-[31px] h-[28rem] max-h-96 overflow-hidden p-1.5 ">
								<div className="rounded-[17px] sm:rounded-[25px] h-[27rem] overflow-hidden bg-gradient-to-br">
									<Image
										src="/truck.jpg"
										className="object-cover object-center"
										width={1000}
										height={1000}
										alt="Hero-Image"
									/>
									<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
										<button className="inline-flex h-10 rounded-xl p-px bg-gradient-to-br from-[#84B2E5] to-[#2F6EB1] shadow-lg">
											<div className="flex h-full items-center gap-2 px-6 font-medium rounded-[11px] bg-gradient-to-br from-[#4B91DE] to-[#276AB2] text-white button-hover">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 384 512"
													className="fill-current h-3.5"
												>
													<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
												</svg>
												<span>Watch Video</span>
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
