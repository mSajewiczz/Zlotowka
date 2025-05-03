import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

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
				</div>

				<div className="p-2 flex gap-2">
					<button className="cursor-pointer bg-amber-300 px-4 py-1">Log in</button>
					<button className="cursor-pointer bg-amber-300 px-4 py-1">Sign up</button>
				</div>
			</div>

			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
