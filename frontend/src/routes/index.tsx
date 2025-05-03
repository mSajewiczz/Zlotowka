import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header/Header";
import AppPresentataion from "../components/AppPresentation/AppPresentation";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="p-2">
			<Header/>
      <AppPresentataion/>
		</div>
	);
}
