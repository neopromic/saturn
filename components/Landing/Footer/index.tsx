import { Button } from "@/components/ui/button";
import Link from "next/link";

export const FooterLayout = () => {
	return (
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
				<Link href="/contacts">
					<Button variant={"link"} size={"sm"} className="text-xs">
						Contatos
					</Button>
				</Link>
			</div>
		</section>
	);
};
