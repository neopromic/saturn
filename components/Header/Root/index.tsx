import { ActionRow } from "../ActionsRow";
import Link from "next/link";

export const Root = () => {
	return (
		<header className="sticky left-0 top-0 flex h-fit max-h-16 w-full flex-row items-center justify-between border-b bg-transparent px-4 py-2 backdrop-blur-md z-50">
			<div className="flex-1">
				<Link href="/">
					<h1 className="select-none font-medium tracking-tighter hover:underline">
						Saturn
					</h1>
				</Link>
			</div>
			<div className="">
				<ActionRow />
			</div>
		</header>
	);
};
