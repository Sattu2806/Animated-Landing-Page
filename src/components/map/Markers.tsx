import { UserLocationContext } from "@/context/UserLocationContext";
import { Marker } from "react-map-gl";
import React, { useContext } from "react";
import { SourceCoordinatesContext } from "@/context/SourceCoordinatesContext";
import { DestinationCoordinatesContext } from "@/context/DestinationCoordinatesContext";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";

function Markers() {
	const { userLocation, setUserLocation } = useContext(UserLocationContext);
	const { sourceCordinate, setSourceCordinate } = useContext(
		SourceCoordinatesContext
	);
	const { destinationCordinate, setDestinationCordinate } = useContext(
		DestinationCoordinatesContext
	);
	return (
		<div>
			<Marker
				longitude={userLocation?.lng}
				latitude={userLocation?.lat}
				anchor="bottom"
			>
				<Image
					src={`/pin.png`}
					alt="image"
					className="w-10 h-10"
					width={100}
					height={100}
				/>
			</Marker>

			{sourceCordinate?.length != 0 ? (
				<Marker
					longitude={sourceCordinate?.lng}
					latitude={sourceCordinate?.lat}
					anchor="bottom"
				>
					<Image
						src={`/pin.png`}
						alt="marker"
						className="w-10 h-10"
						width={100}
						height={100}
					/>
				</Marker>
			) : null}

			{destinationCordinate?.length != 0 ? (
				<Marker
					longitude={destinationCordinate?.lng}
					latitude={destinationCordinate?.lat}
					anchor="bottom"
				>
					<Image
						src={`/pin.png`}
						className="w-10 h-10"
						alt="marker"
						width={100}
						height={100}
					/>
				</Marker>
			) : null}
		</div>
	);
}

export default Markers;
