import RetroGrid from "@/components/magicui/retro-grid";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconArrowBadgeDownFilled } from "@tabler/icons-react";
import { Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const HeroLayout = () => {
	return (
		<section className="flex h-[calc(100vh-3rem)] flex-col items-center justify-center space-y-4 px-4 py-12">
			<RetroGrid className="h-[calc(100vh-3rem)]" />
			<Badge className="gap-2">
				<Bug
					size={16}
					className="text-blue-charcoal-400 dark:text-blue-charcoal-500"
				/>
				Faça parte de nosso programa de testers.
			</Badge>

			<h1 className="select-none bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-center text-4xl font-extrabold tracking-tighter text-transparent lg:max-w-5xl lg:text-6xl">
				Crie Landing Pages de Alta Conversão em Minutos
			</h1>
			<p className="max-w-80 text-center text-sm text-muted-foreground">
				Dê vida às suas ideias e aumente suas conversões com facilidade. Nossa
				ferramenta permite que você construa páginas poderosas e envolventes com
				um simples{" "}
				<Tooltip>
					<TooltipTrigger>
						<span className="underline transition-all hover:cursor-help hover:select-none hover:tracking-wider hover:text-primary">
							arrastar e soltar.
						</span>
					</TooltipTrigger>
					<TooltipContent className="max-w-md lg:max-w-full">
						<p>
							Nosso sistema de arrastar e soltar permite que você crie landing
							pages impressionantes de maneira fácil e intuitiva, sem
							complicações!
						</p>
					</TooltipContent>
				</Tooltip>
			</p>
			<div className="flex flex-col items-center justify-center">
				<Link href="/auth/signup">
					<Button variant={"blue"} className="">
						Experimente Gratuitamente
					</Button>
				</Link>
			</div>
			<div className="h-full flex relative animate-pulse">
				<IconArrowBadgeDownFilled className="absolute bottom-0 text-blue-charcoal-500" />
			</div>
		</section>
	);
};
