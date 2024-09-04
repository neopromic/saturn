import { ActionRow } from "../ActionsRow";
import Link from "next/link";

export const Root = () => {
  return (
    <header className="flex flex-row w-full px-4 h-12 border-b items-center justify-between sticky top-0 left-0 bg-transparent backdrop-blur-md">
      <div className="flex-1">
        <Link href="/">
        <h1 className="select-none tracking-tighter font-medium hover:underline">
          Saturn
        </h1>
        </Link>
      </div>
      <div className="">
        <ActionRow />
      </div>
    </header>
  );
};
