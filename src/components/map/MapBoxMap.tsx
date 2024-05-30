"use client";
import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext, useEffect, useRef } from "react";
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./Markers";
import { DestinationCoordinatesContext } from "@/context/DestinationCoordinatesContext";
import { SourceCoordinatesContext } from "@/context/SourceCoordinatesContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import MapBoxRoute from "./MapBoxRoute";

const MapboxMap = () => {
	const mapRef = useRef<any>();
	const MAPBOX_DRIVING_ENDPOINT =
		"https://api.mapbox.com/directions/v5/mapbox/driving/";
	const session_token = "0fec0c31-2a81-4db1-88fb-42f29d30d541";
	const access_token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
	const { userLocation, setUserLocation } = useContext(UserLocationContext);
	const { sourceCordinate, setSourceCordinate } = useContext(
		SourceCoordinatesContext
	);
	const { destinationCordinate, setDestinationCordinate } = useContext(
		DestinationCoordinatesContext
	);
	const { directionData, setDirectionData } = useContext(DirectionDataContext);

	useEffect(() => {
		if (sourceCordinate) {
			mapRef.current?.flyTo({
				center: [sourceCordinate.lng, sourceCordinate.lat],
				duration: 2500,
			});
		}
	}, [sourceCordinate]);

	useEffect(() => {
		if (destinationCordinate) {
			mapRef.current?.flyTo({
				center: [destinationCordinate.lng, destinationCordinate.lat],
				duration: 2500,
			});
		}

		if (sourceCordinate && destinationCordinate) {
			getDirectionRoute();
		}
	}, [destinationCordinate]);

	const getDirectionRoute = async () => {
		const res = await fetch(
			MAPBOX_DRIVING_ENDPOINT +
				sourceCordinate.lng +
				"," +
				sourceCordinate.lat +
				";" +
				destinationCordinate.lng +
				"," +
				destinationCordinate.lat +
				"?overview=full&geometries=geojson" +
				"&access_token=" +
				access_token,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const result = await res.json();
		setDirectionData(result);
	};

	return (
		<div className="">
			<h2 className="text-lg font-semibold">Map</h2>
			<div className="rounded-lg overflow-hidden mt-4   ">
				{userLocation ? (
					<Map
						ref={mapRef}
						mapboxAccessToken={access_token}
						initialViewState={{
							longitude: userLocation?.lng,
							latitude: userLocation?.lat,
							zoom: 14,
						}}
						style={{ width: "100%", height: 550, borderRadius: 10 }}
						mapStyle="mapbox://styles/mapbox/streets-v9"
					>
						<Markers />
						{directionData?.routes ? (
							<MapBoxRoute
								coordinates={directionData?.routes[0]?.geometry?.coordinates}
							/>
						) : null}
					</Map>
				) : null}
			</div>
		</div>
	);
};

export default MapboxMap;
