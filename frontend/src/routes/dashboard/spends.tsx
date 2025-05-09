import { createFileRoute } from "@tanstack/react-router";
import Spends from "../../components/Spends/Spends";

export const Route = createFileRoute("/dashboard/spends")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Spends/>
		</div>
	);
}
