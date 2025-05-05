import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef, useState, useContext } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import Dashboard from "../components/Dashboard/Dashboard";
import { AuthorizationContext } from "../context/AuthorizationContext";


export const Route = createFileRoute("/logIn")({
	component: RouteComponent,
});

function RouteComponent() {
	const inputRef = useRef(null);
	const [userData, setUserData] = useState({ userName: "", userPassword: "" });
	const [message, setMessage] = useState("");
	const [auth, setAuth] = useState({ passedAuth: false, userName: "" });
	const authContext = useContext(AuthorizationContext);
	const navigate = useNavigate();



	const focusInput = () => {
		// inputRef.current.focus();
		console.log("test");
	};

	return createPortal(
		<div className="absolute bg-gray-300 w-screen h-screen z-10 top-0 flex flex-col justify-center items-center">
			<div className="flex flex-col bg-white p-10 gap-5 items-center">
				<h2 className="text-3xl">Log in</h2>

				<form action="" className="flex flex-col gap-1">
					<label htmlFor="" className="flex flex-col gap-2">
						<p>Your username</p>
						<input
							className="border"
							type="text"
							placeholder="Username"
							value={userData.userName}
							onChange={e => {
								setUserData({ ...userData, userName: e.target.value });
							}}
						/>
					</label>
					<label htmlFor="" className="flex flex-col gap-1">
						<p>Your password</p>
						<input
							ref={inputRef}
							className="border"
							type="password"
							placeholder="Password"
							value={userData.userPassword}
							onChange={e => {
								setUserData({ ...userData, userPassword: e.target.value });
							}}
						/>
					</label>
					<button
						className="bg-amber-300 cursor-pointer"
						onClick={async e => {
							e.preventDefault();
							console.log("userName: " + userData.userName);
							console.log("password: " + userData.userPassword);

							const response = await fetch(
								"http://localhost:5151/api/auth/login",
								{
									method: "POST",
									headers: {
										"Content-Type": "application/json",
									},
									body: JSON.stringify({
										UserName: userData.userName,
										Password: userData.userPassword,
									}),
								}
							);

							if (response.ok) {
								setMessage("You're succesfully logged in!");
								setAuth({ passedAuth: true, userName: userData.userName});
								
								<AuthorizationContext.Provider
									value={{passedAuthorisation: auth.passedAuth, userName: auth.userName}}>

										<Dashboard></Dashboard>

										{`${navigate({ to: '/dashboard' })}`};
								</AuthorizationContext.Provider>;
							} else {
								setMessage("Invalid user name or password");
							}
							console.log(response);
						}}>
						Log in
					</button>
					<Link to="/">
						<button
							className="w-full cursor-pointer bg-amber-300"
							onClick={close}>
							Go back
						</button>
					</Link>

					<Link to="/signUp">
						<button className="text-sm text-blue-400 cursor-pointer">
							Haven't yet an account? Sign up for free!
						</button>
					</Link>
					<p>{message}</p>
				</form>
			</div>
		</div>,
		document.body
	);
}
