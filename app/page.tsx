import { Landing } from "@/components/Landing";

export default function Home() {
	return (
		<Landing.Container>
			<Landing.Hero />
			<Landing.Features />
			<Landing.HowWeWork />
			<Landing.Footer />
		</Landing.Container>
	);
}
