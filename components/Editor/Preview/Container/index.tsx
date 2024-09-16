export const PreviewContainer = ({
	children,
}: { children: React.ReactNode }) => {
	return (
		<main className="w-full border h-[calc(100vh-3rem)] mx-4 my-4 rounded-lg p-4">
			{children}
		</main>
	);
};
