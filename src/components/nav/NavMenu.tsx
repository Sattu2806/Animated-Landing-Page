"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Icon from "../Icon";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "On-Road Delivery",
		href: "/docs/primitives/alert-dialog",
		description:
			"Quit paying retail prices and wasting time at the gas stations waiting for your chance to fill up On-road assets rely on a constant supply of fuel to keep them moving, and our fuel delivery services ensure that they have the fuel they need when they need it.",
	},
	{
		title: "Off-Road Delivery",
		href: "/docs/primitives/hover-card",
		description:
			" Off-road assets are often being used in remote locations, far from conventional fueling stations, making fuel delivery a critical component of any off-road operation. ",
	},
	{
		title: "Generator Delivery",
		href: "/docs/primitives/progress",
		description:
			"Fuel delivery ensures that generators have a continuous supply of fuel, reducing the risk of downtime and power outages. We can tailor our fuel delivery to your specific needs, providing either on-site or off-site deliveries.",
	},
	{
		title: "Emergency Delivery",
		href: "/docs/primitives/scroll-area",
		description:
			"We provide emergency fuel delivery services to keep your business running in the event of a fuel shortage or emergency. Our team is available 24/7 to deliver fuel to your location when you need it most.",
	},
];

export function NavMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>solutions</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] backdrop-blur-2xl ">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md b   p-6 no-underline outline-none focus:shadow-md  "
										href="/"
									>
										<Icon name="home" className="h-6 w-6" />
										<div className="mb-2 mt-4 text-lg font-medium">
											Auto Refuel
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											We provide on-demand fuel delivery services to keep your
											vehicles and equipment fueled up and ready to go.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/docs" title="About us">
								Do you want to learn more about our services?
							</ListItem>
							<ListItem href="/docs/installation" title="Customer service">
								talk to a customer service representative
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] backdrop-blur-2xl md:grid-cols-2 lg:w-[600px] ">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/booking" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Book now
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
