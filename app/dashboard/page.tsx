import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Dashboard = () => {
	return (
		<main className="">
			<div className="flex h-72 flex-col items-center justify-center space-y-2 bg-gradient-to-b from-blue-charcoal-500 to-background px-4 py-12 text-primary">
				<h1 className="max-w-[600px] text-center text-4xl font-bold leading-none tracking-tighter text-blue-charcoal-50 lg:text-6xl">
					Gerencie suas landing pages num só lugar...
				</h1>
				<p className="text-center text-sm text-blue-charcoal-100/80">
					Gerencie todas as suas landing pages em um único lugar.
				</p>

				<Button className="w-64 gap-2" variant={"blue"}>
					<Sparkles size={18} />
					Criar nova!
				</Button>
			</div>

			<section className="px-4">
				<h1 className="text-lg font-semibold">Modelos populares</h1>
				<p className="text-xs text-muted-foreground">
					Veja os modelos mais utilizados pelos nossos usuários.
				</p>
				<div className="my-4 w-full rounded-md border-2 border-dotted p-4">
					<Card className="w-fit">
						<CardContent className="size-32" />
					</Card>
				</div>
			</section>
			<section className="px-4">
				<h1 className="text-lg font-semibold">Seus modelos</h1>
				<p className="text-xs text-muted-foreground">
					Veja os modelos criados e mais utilizados por você.
				</p>
				<div className="my-4 w-full rounded-md border-2 border-dotted p-4">
					<Card className="w-fit">
						<CardContent className="size-32" />
					</Card>
				</div>
			</section>
		</main>
	);
};

export default Dashboard;
