import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Infinity as Logo } from "lucide-react";
import Link from "next/link";

const SignInPage = () => {
	return (
		<div className="overflow-y-hidden flex flex-col items-center px-4 py-12 scroll-smooth">
			<section className="flex flex-col space-y-2">
				<Logo
					size={28}
					className="text-center w-full flex items-center justify-center"
				/>
				<h1 className="text-4xl font-bold text-center">
					Bem-vindo de volta ao Saturn
				</h1>
				<h2 className="text-muted-foreground text-sm text-center max-w-md">
					Entre em sua conta em nossa plataforma e comece a testar
					gratuitamente!
				</h2>
			</section>
			<form className="space-y-4 mt-4 h-fit max-w-md">
				<div className="">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="joeh@mail.com" />
				</div>
				<div className="">
					<Label htmlFor="pass">Senha</Label>
					<Input id="pass" type="password" placeholder="******" />
					<Button variant={"link"}>Esqueci minha conta</Button>
				</div>
				<p className="text-sm text-muted-foreground text-center">
					Ao clicar em criar conta, você aceita nossos termos de serviço e
					termos de uso.
				</p>
				<div className="">
					<Button className="w-full" type="submit">
						Entrar na minha conta
					</Button>
					<p className="text-muted-foreground w-full text-center text-xs my-2">
						Ou...
					</p>
					<Link href={"/auth/signup"}>
						<Button variant={"link"} className="w-full text-center">
							Criar minha conta
						</Button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignInPage;
