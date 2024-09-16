import { Button } from "@/components/ui/button";

export const SideBarItems = ({ children }: { children: React.ReactNode }) => {
	return (
		<Button className="bg-background w-32 text-white hover:bg-background/80 gap-2 hover:border">
			{children}
		</Button>
	);
};
