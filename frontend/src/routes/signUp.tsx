import { createFileRoute, Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";

export const Route = createFileRoute("/signUp")({
	component: RouteComponent,
});

function RouteComponent() {
	return createPortal(
		<div className="absolute bg-red-500 w-screen h-screen z-10 top-0 flex flex-col justify-center items-center">
			<div className="flex flex-col bg-white p-10 gap-5 items-center">
				<h2 className="text-3xl">Sign up</h2>

				<form action="" className="flex flex-col gap-1">
					<label htmlFor="" className="flex flex-col gap-2">
						<p>Your username</p>
						<input type="text" placeholder="Username" />
					</label>

					<label htmlFor="" className="flex flex-col gap-1">
						<p>Your password</p>
						<input type="password" placeholder="Password" />
					</label>

          <label htmlFor="" className="flex flex-col gap-1">
						<p>Repeat password</p>
						<input type="password" placeholder="Password" />
					</label>

					<button className="bg-amber-300 cursor-pointer">Sign up</button>
					<Link to="/">
						<button className="w-full cursor-pointer bg-amber-300" onClick={close}>
							Go back
						</button>
					</Link>

					<Link to="/logIn">
						<button className="text-sm text-blue-400 cursor-pointer">
							Have you already account? Log in here! 
						</button>
					</Link>
				</form>
			</div>
		</div>,
		document.body
	);
}
