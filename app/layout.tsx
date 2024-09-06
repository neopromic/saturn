import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saturn",
  authors: [
    { name: "Wesley Souza Laurentino" },
    { name: "Creattek" },
    {
      name: "Neo",
    },
    { name: "Neopromic" },
  ],
  creator: "Wesley Souza Laurentino, Creattek",
  keywords: [
    "Tech",
    "Next",
    "next",
    "wix",
    "landing page",
    "website builder",
    "website",
    "criar landing page",
    "marketing digital",
    "página de lançamento",
    "funil de vendas",
    "shopify",
    "nuvemshop",
    "ads",
    "converter",
    "como converter",
    "como vender mais",
    "primeira venda",
  ],
  description:
    "Dê vida às suas ideias e aumente suas conversões com facilidade. Nossa ferramenta permite que você construa páginas poderosas e envolventes com um simples arrastar e soltar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem
          attribute="class"
          storageKey="app-theme"
        >
          <TooltipProvider>
            <Header.Root />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
