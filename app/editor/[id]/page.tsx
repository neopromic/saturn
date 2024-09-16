import { SideBar } from "@/components/Editor/SideBar";

const EditorPage = () => {
	return (
		<div className="grid grid-cols-2 overflow-y-hidden">
			<SideBar.Container />
			<main className="w-full">
				<h1>Hello, world</h1>
			</main>
		</div>
	);
};

export default EditorPage;
