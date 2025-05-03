import { createFileRoute } from "@tanstack/react-router";

import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/logIn")({
	component: RouteComponent,
});

function RouteComponent() {
	return createPortal(
		<div className="absolute bg-red-500 w-screen h-screen z-10 top-0 flex flex-col justify-center items-center">
			<div className="flex flex-col bg-white p-10 gap-5 items-center">
				<h2 className="text-3xl">Log in</h2>

				<form action="" className="flex flex-col gap-1">
					<label htmlFor="" className="flex flex-col gap-2">
						<p>Your username</p>
						<input type="text" placeholder="Username" />
					</label>
					<label htmlFor="" className="flex flex-col gap-1">
						<p>Your password</p>
						<input type="password" placeholder="Password" />
					</label>
					<button className="bg-amber-300 cursor-pointer">Log in</button>
					<Link to="/">
						<button className="cursor-pointer bg-amber-300" onClick={close}>
							Go back
						</button>
					</Link>

					<Link to="/signUp">
						<button className="text-sm text-blue-400 cursor-pointer">Haven't yet an account? Sign up for free!</button>
					</Link>
				</form>
			</div>
		</div>,
		document.body
	);
}
