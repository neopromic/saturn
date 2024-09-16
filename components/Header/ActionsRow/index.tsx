import { ModeToggle } from "@/components/toggle-mode";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export const ActionRow = () => {
	return (
		<div className="flex items-center gap-2">
			<ModeToggle />
			<Link href={"/dashboard"}>
				<Avatar>
					<AvatarFallback className="border border-blue-charcoal-500">
						W
					</AvatarFallback>
				</Avatar>
			</Link>
		</div>
	);
};
