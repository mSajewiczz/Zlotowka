import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavButtons from "../components/NavButtons/NavButtons";
import {ChangeTheme} from "../components/ChangeTheme/ChangeTheme";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="md:flex hidden md:flex-row  justify-around items-center">
			<div className=" p-2 flex gap-10 items-center sm:text-xl">
			<Link to="/"><p className="bg-amber-400 px-4 py-1">Złotówka</p></Link>

					<button className="cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">

					<Link to="/" className="[&.active]:text-red-500">
					Home
					</Link>{" "}
					</button>
					<Link to="/about" className="[&.active]:font-bold">
						About
					</Link>
					<Link to="/dashboard/dashboard" className="[&.active]:font-bold">
						Dashboard
					</Link>
				</div>

        <NavButtons/>
			</div>

			<hr />
			<div className="flex flex-col">
			<Outlet />
			</div>
			<TanStackRouterDevtools />
		</>
	),
});
