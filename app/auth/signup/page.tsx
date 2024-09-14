import BlurIn from "@/components/magicui/blur-in";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUpPage = () => {
	return (
		<div className="overflow-y-hidden flex flex-col items-center px-4 py-12">
			<section className="flex flex-col ">
				<h1 className="text-4xl font-bold">Comece a usar o saturn</h1>
				<h2 className="text-muted-foreground text-sm">
					Crie sua conta em nossa plataforma e comece a testar gratuítamente!
				</h2>
			</section>
			<form className="space-y-4 mt-4 h-fit">
				<div className="">
					<Label htmlFor="username">Nome de usuário</Label>
					<Input id="username" />
				</div>
				<div className="">
					<Label htmlFor="email">Email</Label>
				<Input id="email" />
				</div>
				<div className="">
					<Label htmlFor="pass">Senha</Label>
					<Input id="pass" />
				</div>
				<div className="">
					<Label htmlFor="repeatpass">Repita sua senha</Label>
					<Input id="repeatpass" />
				</div>
			</form>
		</div>
	);
};

export default SignUpPage;
