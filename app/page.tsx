import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { PencilIcon } from "lucide-react";
import { CircleHelp } from "lucide-react";

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
        <div className="flex items-center gap-4 ">
          <Button variant={"blue"} className="">
            Experimente Gratuitamente
          </Button>
          <Button
            variant={"secondary"}
            className="hover:font-bold trasition-all "
          >
            Ver demonstração
          </Button>
        </div>
      </section>
      <section className="bg-muted p-4 flex flex-col justify-center items-center space-y-2">
        <Cover>
          <h2 className="font-bold text-xl text-center px-4">Recursos poderosos</h2>
        </Cover>
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

      <section className="flex flex-col justify-center items-center space-y-4 py-6">
        <div className="flex flex-col space-y-2 justify-center items-center ">
          <CircleHelp className="text-blue-charcoal-500" size={58} />

          <h1 className="text-3xl max-w-md md:max-w-full lg:max-w-full text-center font-semibold tracking-tight">
            Como nossa plataforma funciona?
          </h1>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center ">
          <div className="rounded-full p-4 text-xl bg-blue-charcoal-500 text-blue-charcoal-50 size-12 flex items-center justify-center ">
            1
          </div>
          <h2 className="text-lg font-medium">
            Escolha um template {"(Ou use nossa IA)"}.
          </h2>
          <p className="max-w-64 text-center text-muted-foreground text-sm">
            Comece com um de nossos templates profissionais ou um em branco pra
            criar algo incrível do zero!
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center ">
          <div className="rounded-full p-4 text-xl bg-blue-charcoal-500 text-blue-charcoal-50 size-12 flex items-center justify-center ">
            2
          </div>
          <h2 className="text-lg font-medium">Custumize do seu jeito.</h2>
          <p className="max-w-64 text-center text-muted-foreground text-sm">
            Use nosso editor arrasta e solta pra adicionar seu conteúdo,
            imagens, e sua marca.
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center ">
          <div className="rounded-full p-4 text-xl bg-blue-charcoal-500 text-blue-charcoal-50 size-12 flex items-center justify-center ">
            3
          </div>
          <h2 className="text-lg font-medium">Publique seu site.</h2>
          <p className="max-w-64 text-center text-muted-foreground text-sm">
            Com um clique, sua landing page está ativa e pronta pra converter.
          </p>
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
