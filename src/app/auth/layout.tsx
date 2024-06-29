import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {

	return (
		<div className="h-screen flex w-full justify-center">
			<div className="w-[600px]  ld:w-full flex flex-col items-center justify-center p-6">
			
				{children}
			</div>
			<div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative  flex-col pt-10 pl-24 gap-3">
				<h2 className="text-gray-300 md:text-4xl font-bold">
					Hey ! , we&apos;re available tp all locations in Nigeria
				</h2>
				<p className="text-gray-400 md:text-sm mb-10">
					Corinna is capable of capturing lead information without a form...{" "}
					<br />
					something never done before 😉
				</p>
				<Image
					src="/phone.svg"
					alt="app image"
					loading="lazy"
					sizes="30"
					className="absolute shrink-0 !w-[1600px] top-48"
					width={0}
					height={0}
				/>
			</div>
		</div>
	);
};

export default Layout;
