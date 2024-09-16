import { Sparkles } from "lucide-react";
import { SideBarItems } from "../Items";

export const SideBarContainer = () => {
	return (
		<aside className="w-[1fr] max-w-[1fr] h-[calc(100vh-3rem)] dark:bg-slate-900 border-r-2 py-4">
			<div className="px-4 flex flex-col space-y-8">
				<SideBarItems>
					<Sparkles size={18} />
					Templates
				</SideBarItems>
				<SideBarItems>
					<Sparkles size={18} />
					Estilos
				</SideBarItems>
				<SideBarItems>
					<Sparkles size={18} />
					Blocos
				</SideBarItems>
			</div>
		</aside>
	);
};
