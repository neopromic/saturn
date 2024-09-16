import { Sparkles } from "lucide-react";
import { SideBarItems } from "../Items";

export const SideBarContainer = () => {
	return (
		<aside className="w-full max-w-[20rem] h-[calc(100vh-3rem)] dark:bg-slate-900 border-r-2 py-4">
			<div className="px-4">
				<SideBarItems>
					<Sparkles size={16} />
					Templates
				</SideBarItems>
			</div>
		</aside>
	);
};
