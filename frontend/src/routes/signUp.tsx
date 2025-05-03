import { createFileRoute, Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";

export const Route = createFileRoute("/signUp")({
	component: RouteComponent,
});

function RouteComponent() {
	return createPortal(
		<div className="absolute bg-red-500 w-screen h-screen z-10 top-0">
			<div>
				<h2>Sing up</h2>
				<Link to="/"><button className="cursor-pointer">Go back</button></Link>
				<form action="">
					<input type="text" placeholder="username"/>
					<input type="password" placeholder="password" />
					<input type="password" placeholder="repeat password" />
					<input type="submit" />
				</form>
			</div>
		</div>,
		document.body
	);
}
