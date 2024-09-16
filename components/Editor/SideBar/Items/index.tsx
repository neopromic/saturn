import { Button } from "@/components/ui/button";

export const SideBarItems = ({ children }: { children: React.ReactNode }) => {
	return (
		<Button className="h-14 w-full justify-start gap-2 border-2 bg-slate-100 px-4 text-left text-lg text-primary hover:border-2 hover:bg-background/80 dark:border-none dark:bg-background dark:text-white dark:hover:bg-blue-charcoal-500">
			{children}
		</Button>
	);
};
