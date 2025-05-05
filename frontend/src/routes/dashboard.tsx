import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import { AuthorizationContext } from "../context/AuthorizationContext";

export const Route = createFileRoute("/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<AuthorizationContext.Provider value={true}>
				<div>Welcome userName in dashboard! </div>
			</AuthorizationContext.Provider>
		</>
	);
}
