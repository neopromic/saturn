import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saturn Saas",
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
