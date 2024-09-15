import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Dashboard = () => {
	return (
		<main className="">
			<div className="px-4 py-12 flex flex-col space-y-2 bg-gradient-to-b from-blue-charcoal-500 to-background text-primary h-72 items-center justify-center">
				<h1 className="text-4xl lg:text-6xl font-bold tracking-tighter leading-none max-w-[600px] text-blue-charcoal-50">
					Seu dashboard de landing pages
				</h1>
				<p className="text-blue-charcoal-100/80 text-sm">
					Gerencie todas as suas landing pages em um único lugar.
				</p>

				<Button className="gap-2 w-fit mt-6" variant={"default"}>
					<Sparkles size={18} />
					Criar nova!
				</Button>
			</div>

			<section className="px-4">
				<h1 className="font-semibold text-lg">Modelos populares</h1>
				<p className="text-xs text-muted-foreground">
					Veja os modelos mais utilizados pelos nossos usuários.
				</p>
				<div className="w-full border-2 my-4 border-dotted p-4 rounded-md">
					<Card className="w-fit">
						<CardContent className="size-32" />
					</Card>
				</div>
			</section>
			<section className="px-4">
				<h1 className="font-semibold text-lg">Seus modelos</h1>
				<p className="text-xs text-muted-foreground">
					Veja os modelos criados e mais utilizados por você.
				</p>
				<div className="w-full border-2 my-4 border-dotted p-4 rounded-md">
					<Card className="w-fit">
						<CardContent className="size-32" />
					</Card>
				</div>
			</section>
		</main>
	);
};

export default Dashboard;
