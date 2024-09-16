import RetroGrid from "@/components/magicui/retro-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { Bug, PencilIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<section>
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
					ferramenta permite que você construa páginas poderosas e envolventes
					com um simples{" "}
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
			</section>
			<section className="flex h-[100vh] flex-col items-center justify-center space-y-2 bg-muted px-4 py-12">
				<Cover>
					<h2 className="px-4 text-center text-xl font-bold">
						Recursos poderosos
					</h2>
				</Cover>
				<p className="max-w-md text-center text-muted-foreground">
					Nosso editor de arrastar e soltar, combinado com uma biblioteca de
					modelos incríveis, torna a criação de landing pages tão fácil quanto
					um jogo de criança.
				</p>
				<div className="flex flex-col gap-4 sm:flex-col md:flex-row lg:flex-row">
					<div className="flex flex-col items-center gap-2 rounded-md border border-background p-2 transition-all hover:cursor-pointer">
						<div className="flex items-center gap-2">
							<PencilIcon className="text-primary" size={18} />
							<h2 className="truncate font-semibold">Modelos incríveis</h2>
						</div>
						<div className="max-w-64 md:max-w-32 lg:max-w-32">
							<p className="max-w-xs text-center text-sm text-muted-foreground">
								Escolha entre uma variedade de modelos lindamente projetados
								para criar landing pages profissionais.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-4 rounded-md bg-background p-4 transition-all hover:cursor-pointer hover:bg-background/90">
						<div className="flex items-center gap-2">
							<PencilIcon className="text-primary" size={18} />
							<h2 className="truncate font-semibold">Drag and Drop</h2>
						</div>
						<div className="max-w-64 md:max-w-32 lg:max-w-32">
							<p className="max-w-xs text-center text-sm text-muted-foreground">
								Arraste e solte elementos para criar layouts personalizados sem
								escrever uma linha de código.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-2 rounded-md bg-background p-2 transition-all hover:cursor-pointer hover:bg-background/90">
						<div className="flex items-center gap-2">
							<PencilIcon className="text-primary" size={18} />
							<h2 className="truncate font-medium">Publicação rápida</h2>
						</div>
						<div className="max-w-64 md:max-w-32 lg:max-w-32">
							<p className="max-w-xs text-center text-sm text-muted-foreground">
								Publique suas landing pages com um clique e comece a receber
								leads imediatamente.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="flex flex-col items-center justify-center space-y-4 py-12">
				<div className="mb-6 flex flex-col items-center justify-center space-y-2">
					<h1 className="max-w-md text-center text-3xl font-semibold tracking-tight md:max-w-full lg:max-w-full">
						Como nossa plataforma funciona?
					</h1>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<div className="flex size-12 items-center justify-center rounded-full bg-blue-charcoal-500 p-4 text-xl text-blue-charcoal-50">
						1
					</div>
					<h2 className="text-lg font-medium">
						Escolha um template {"(Ou use nossa IA)"}.
					</h2>
					<p className="max-w-64 text-center text-sm text-muted-foreground">
						Comece com um de nossos templates profissionais ou um em branco pra
						criar algo incrível do zero!
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<div className="flex size-12 items-center justify-center rounded-full bg-blue-charcoal-500 p-4 text-xl text-blue-charcoal-50">
						2
					</div>
					<h2 className="text-lg font-medium">Personalize do seu jeito.</h2>
					<p className="max-w-64 text-center text-sm text-muted-foreground">
						Use nosso editor arrasta e solta pra adicionar seu conteúdo,
						imagens, e sua marca.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<div className="flex size-12 items-center justify-center rounded-full bg-blue-charcoal-500 p-4 text-xl text-blue-charcoal-50">
						3
					</div>
					<h2 className="text-lg font-medium">Publique seu site.</h2>
					<p className="max-w-64 text-center text-sm text-muted-foreground">
						Com um clique, sua landing page está ativa e pronta pra converter.
					</p>
				</div>
			</section>
			<section className="mt-12 p-4">
				<p className="flex flex-col items-center justify-center text-center text-xs text-muted-foreground">
					© 2024 Saturn Landing Page Builder | Creattek. Todos os direitos
					reservados.
				</p>
				<div className="flex flex-row items-center justify-center">
					<Button variant={"link"} size={"sm"} className="text-xs">
						Termos de uso
					</Button>
					<Button variant={"link"} size={"sm"} className="text-xs">
						Política de privacidade
					</Button>
					<Button variant={"link"} size={"sm"} className="text-xs">
						Contatos
					</Button>
				</div>
			</section>
		</section>
	);
}
