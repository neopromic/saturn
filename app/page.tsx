import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { PencilIcon } from "lucide-react";

export default function Home() {
  return (
    <section>
      <section className="lg:flex lg:flex-col lg:justify-center lg:items-center px-4 space-y-2 py-12">
        <h1 className="text-4xl tracking-tighter font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-background select-none">
          Crie Landing Pages de Alta Conversão em Minutos
        </h1>
        <p className="text-muted-foreground text-sm">
          Dê vida às suas ideias e aumente suas conversões com facilidade. Nossa
          ferramenta permite que você construa páginas poderosas e envolventes
          com um simples{" "}
          <Tooltip>
            <TooltipTrigger>
              <span className="underline hover:tracking-wider hover:text-primary hover:cursor-help hover:select-none transition-all">
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
        <Button variant={"blue"} className="">
          Experimente Gratuitamente
        </Button>
      </section>

      <section className="bg-muted p-4 flex flex-col justify-center items-center space-y-2">
        <h2 className="font-bold text-xl text-center">Recursos poderosos</h2>
        <p className="text-center text-muted-foreground max-w-md">
          Nosso editor de arrastar e soltar, combinado com uma biblioteca de
          modelos incríveis, torna a criação de landing pages tão fácil quanto
          um jogo de criança.
        </p>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4">
          <div className="flex flex-col items-center bg-background rounded-md p-2 gap-2 hover:bg-background/90 hover:cursor-pointer transition-all">
            <div className="flex items-center gap-2">
              <PencilIcon className="text-primary" size={18} />
              <h2 className="truncate font-semibold">Modelos incríveis</h2>
            </div>
            <div className="max-w-64 md:max-w-32 lg:max-w-32">
              <p className="text-muted-foreground text-sm text-center max-w-xs">
                Escolha entre uma variedade de modelos lindamente projetados
                para criar landing pages profissionais.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-background rounded-md p-4 gap-4 hover:bg-background/90 hover:cursor-pointer transition-all">
            <div className="flex items-center gap-2">
              <PencilIcon className="text-primary" size={18} />
              <h2 className="truncate font-semibold">Drag and Drop</h2>
            </div>
            <div className="max-w-64 md:max-w-32 lg:max-w-32">
              <p className="text-muted-foreground text-sm text-center max-w-xs">
                Arraste e solte elementos para criar layouts personalizados sem
                escrever uma linha de código.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-background rounded-md p-2 gap-2 hover:bg-background/90 hover:cursor-pointer transition-all">
            <div className="flex items-center gap-2">
              <PencilIcon className="text-primary" size={18} />
              <h2 className="truncate font-medium">Publicação rápida</h2>
            </div>
            <div className="max-w-64 md:max-w-32 lg:max-w-32">
              <p className="text-muted-foreground text-sm text-center max-w-xs">
                Publique suas landing pages com um clique e comece a receber
                leads imediatamente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 p-4">
        <p className="text-muted-foreground text-xs flex flex-col justify-center items-center">
          © 2024 Saturn Landing Page Builder. Todos os direitos reservados.
        </p>
        <div className="flex flex-row justify-center items-center">
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
