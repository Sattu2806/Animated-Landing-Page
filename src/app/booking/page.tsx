"use client";

import Booking from "@/components/booking/Booking";
import MapBoxMap from "@/components/map/MapBoxMap";
import { AmountContext } from "@/context/AmountContext";
import { DestinationCoordinatesContext } from "@/context/DestinationCoordinatesContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { SourceCoordinatesContext } from "@/context/SourceCoordinatesContext";
import { UserLocationContext } from "@/context/UserLocationContext";
import { useEffect, useState } from "react";
export default function Home() {
	const [userLocation, setUserLocation] = useState<any>();
	const [sourceCordinate, setSourceCordinate] = useState<any>([]);
	const [destinationCordinate, setDestinationCordinate] = useState<any>([]);
	const [directionData, setDirectionData] = useState<any>([]);
	const [Amount, setAmount] = useState<any>();
	useEffect(() => {
		getUserLocation();
	}, []);
	const getUserLocation = () => {
		navigator.geolocation.getCurrentPosition(function (pos) {
			setUserLocation({
				lat: pos.coords.latitude,
				lng: pos.coords.longitude,
			});
		});
	};

	return (
		<div>
			<UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
				<SourceCoordinatesContext.Provider
					value={{ sourceCordinate, setSourceCordinate }}
				>
					<DestinationCoordinatesContext.Provider
						value={{ destinationCordinate, setDestinationCordinate }}
					>
						<DirectionDataContext.Provider
							value={{ directionData, setDirectionData }}
						>
							<AmountContext.Provider value={{ Amount, setAmount }}>
								<div className="grid grid-cols-1 md:grid-cols-3 px-4 sm:px-8 lg:px-10 pt-4 pb-3 ">
									<div>
										<Booking />
									</div>
									<div className="col-span-2">
										<MapBoxMap />
									</div>
								</div>
							</AmountContext.Provider>
						</DirectionDataContext.Provider>
					</DestinationCoordinatesContext.Provider>
				</SourceCoordinatesContext.Provider>
			</UserLocationContext.Provider>
		</div>
	);
}
