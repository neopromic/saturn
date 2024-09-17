import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva(" text-primary", {
	variants: {
		variant: {
			default:
				"select-none text-primary text-4xl font-extrabold tracking-tighter lg:max-w-5xl lg:text-6xl",
			paragraph: "text-sm text-muted-foreground leading-relaxed",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

interface IHeading
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {
	className?: string;
	children: React.ReactNode;
}

export const Typo = ({ children, className, variant, ...props }: IHeading) => {
	return (
		<p className={cn(headingVariants({ variant, className }))} {...props}>
			{children}
		</p>
	);
};
