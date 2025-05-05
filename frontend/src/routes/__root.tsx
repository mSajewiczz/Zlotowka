import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavButtons from "../components/NavButtons/NavButtons";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="flex justify-between">
				<div className="p-2 flex gap-2 items-center">
					<p className="bg-amber-400 px-4 py-1">Złotówka</p>
					<Link to="/" className="[&.active]:font-bold">
						Home
					</Link>{" "}
					<Link to="/about" className="[&.active]:font-bold">
						About
					</Link>

					<Link to="/dashboard" className="[&.active]:font-bold">
						Dashboard
					</Link>
				</div>

        <NavButtons/>
				
			</div>

			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
