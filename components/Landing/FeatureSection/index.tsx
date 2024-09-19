import { BentoGridLayout } from "@/components/Landing/BentoGridLayout";

export const FeatureSectionLayout = () => {
	return (
		<section className="to flex min-h-[100vh] flex-col items-center justify-center space-y-2 bg-gradient-to-b from-muted to-background px-4 py-12">
			<h2 className="px-4 text-center text-3xl font-bold">
				Recursos poderosos
			</h2>
			<p className="max-w-md text-center text-sm text-muted-foreground">
				Nosso editor de arrastar e soltar, combinado com uma biblioteca de
				modelos incríveis, torna a criação de landing pages tão fácil quanto um
				jogo de criança.
			</p>
			<div className="flex flex-col gap-4 sm:flex-col md:flex-row lg:flex-row">
				<BentoGridLayout />
			</div>
		</section>
	);
};
