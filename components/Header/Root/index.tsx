import { ActionRow } from "../ActionsRow";

export const Root = () => {
  return (
    <header className="flex flex-row w-full px-4 h-12 border-b items-center justify-between sticky top-0 left-0 bg-transparent backdrop-blur-md">
      <div className="flex-1">
        <h1 className="select-none tracking-tighter font-medium ">Saturn</h1>
      </div>
      <div className="">
        <ActionRow />
      </div>
    </header>
  );
};
