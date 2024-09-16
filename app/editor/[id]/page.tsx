import { PreviewLayout } from "@/components/Editor/Preview";
import { SideBar } from "@/components/Editor/SideBar";

const EditorPage = () => {
	return (
		<div className="flex overflow-y-hidden h-[calc(100vh-3rem)]">
			<SideBar.Container />

			<PreviewLayout.Container>
				<h1>Hello, preview!</h1>
			</PreviewLayout.Container>
		</div>
	);
};

export default EditorPage;
