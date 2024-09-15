import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Infinity as Logo } from "lucide-react";

const SignUpPage = () => {
	return (
		<div className="overflow-y-hidden flex flex-col items-center px-4 py-12 scroll-smooth">
			<section className="flex flex-col ">
				<Logo
					size={28}
					className="text-center w-full flex items-center justify-center"
				/>
				<h1 className="text-4xl font-bold text-center">
					Comece a usar o Saturn
				</h1>
				<h2 className="text-muted-foreground text-sm text-center max-w-md">
					Crie sua conta em nossa plataforma e comece a testar gratuitamente!
				</h2>
			</section>
			<form className="space-y-4 mt-4 h-fit max-w-md">
				<div className="">
					<Label htmlFor="username">Nome de usuário</Label>
					<Input id="username" placeholder="username01" />
				</div>
				<div className="">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="joeh@mail.com" />
				</div>
				<div className="">
					<Label htmlFor="pass">Senha</Label>
					<Input id="pass" type="password" placeholder="******" />
				</div>
				<div className="">
					<Label htmlFor="repeatpass">Repita sua senha</Label>
					<Input id="repeatpass" type="password" placeholder="******" />
				</div>
				<p className="text-sm text-muted-foreground text-center">
					Ao clicar em criar conta, você aceita nossos termos de serviço e
					termos de uso.
				</p>
				<div className="flex gap-4">
					<Button className="w-full">Criar conta</Button>
				</div>
			</form>
		</div>
	);
};

export default SignUpPage;
