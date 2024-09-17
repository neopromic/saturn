import { Typo } from "@/components/typos/Heading";
import { IconBrandWhatsapp, IconMail, IconSparkles } from "@tabler/icons-react";

export default function Page() {
	return (
		<main className="p-4">
			<IconSparkles className="mb-2 animate-pulse text-blue-charcoal-500" />
			<Typo>Entre em contato com nossa equipe</Typo>
			<Typo variant={"paragraph"} className="mt-2">
				Encontre os meios de ficar mais pertinho de nossa equipe! Tire dúvidas,
				dê sugestões, etc.
			</Typo>
			<div className="my-4 flex items-center gap-2 rounded border border-dotted border-blue-charcoal-500 bg-muted p-4">
				<IconMail />
				<Typo variant={"paragraph"} className="select-all">
					creattek.team+support@gmail.com
				</Typo>
			</div>
			<div className="my-4 flex items-center gap-2 rounded border border-dotted border-blue-charcoal-500 bg-muted p-4">
				<IconBrandWhatsapp />
				<Typo variant={"paragraph"} className="select-all">
					+55 83 988582779
				</Typo>
			</div>
		</main>
	);
}
