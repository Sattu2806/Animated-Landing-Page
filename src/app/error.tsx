"use client";

export default function Error({ reset }: { reset: () => void }) {
	return (
		<div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12">
			<h2 className="text-xl font-bold">Oh no!</h2>
			<p className="my-2">
				There was an issue with our Booking app. This could be a temporary issue,
				please try your action again.
			</p>
			<button
				className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-[--default-4] p-4 tracking-wide text-white hover:opacity-90"
				onClick={() => reset()}
			>
				Try Again
			</button>
		</div>
	);
}
