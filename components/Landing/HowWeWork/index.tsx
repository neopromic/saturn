export const HowWeWork = () => {
	return (
		<section className="flex flex-col items-center justify-center space-y-4 py-12">
			<div className="mb-6 flex flex-col items-center justify-center space-y-2">
				<h1 className="max-w-md text-center text-3xl font-semibold tracking-tight md:max-w-full lg:max-w-full">
					Como nossa plataforma funciona?
				</h1>
			</div>
			<div className="items-center gap-2 space-y-4 lg:flex">
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
			</div>
		</section>
	);
};
