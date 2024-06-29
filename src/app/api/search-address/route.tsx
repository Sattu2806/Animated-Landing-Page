import { NextRequest, NextResponse } from "next/server";
const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const searchText = searchParams.get("q");

	const res = await fetch(
		`${BASE_URL}?q=${searchText}&language=en&limit=8&session_token=0fec0c31-2a81-4db1-88fb-42f29d30d541&country=US&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`,
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	const searchResult = await res.json();
	return NextResponse.json(searchResult);
}
