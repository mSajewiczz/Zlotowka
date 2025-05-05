import { createFileRoute, Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";
import { useState } from "react";

export const Route = createFileRoute("/signUp")({
	component: RouteComponent,
});

function RouteComponent() {
	const [errorMessage, setErrorMessage] = useState("");
	const [userData, setUserData] = useState({
		userName: "",
		userPassword: "",
		userRepeatPassword: "",
	});

	return createPortal(
		<div className="absolute bg-gray-300 w-screen h-screen z-10 top-0 flex flex-col justify-center items-center">
			<div className="flex flex-col bg-white p-10 gap-5 items-center">
				<h2 className="text-3xl">Sign up</h2>

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
							className="border"
							type="password"
							placeholder="Password"
							value={userData.userPassword}
							onChange={e => {
								setUserData({ ...userData, userPassword: e.target.value });
							}}
						/>
					</label>

					<label htmlFor="" className="flex flex-col gap-1">
						<p>Repeat password</p>
						<input
							className="border"
							type="password"
							placeholder="Password"
							value={userData.userRepeatPassword}
							onChange={e => {
								setUserData({
									...userData,
									userRepeatPassword: e.target.value,
								});
							}}
						/>
					</label>

					<button
						className="bg-amber-300 cursor-pointer"
						onClick={async e => {
							e.preventDefault();

							if(userData.userName === "") {
								setErrorMessage("User name cannot be empty!")
							}
							else if (userData.userPassword !== userData.userRepeatPassword) {
								setErrorMessage("Passwords aren't the same!");
							} else if(userData.userPassword.length < 7) {
								setErrorMessage("Password cannot be shorter than 8!");
							} else {
								const response = await fetch(
									"http://localhost:5151/api/auth/register",
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
									setErrorMessage("You're succesfully signed up!");
									setUserData({...userData, userName: "", userPassword: "", userRepeatPassword: ""});
								} else if(response.statusText == "Bad Request") {
									setErrorMessage("User with this user name already exists.");
									setUserData({...userData, userName: ""});
									console.log(response.statusText);
								} else {
									setErrorMessage("Something went wrong, try again later.");
									setUserData({...userData, userName: "", userPassword: "", userRepeatPassword: ""});
								}
							}
						}}>
						Sign up
					</button>
					<Link to="/">
						<button
							className="w-full cursor-pointer bg-amber-300"
							onClick={close}>
							Go back
						</button>
					</Link>

					<Link to="/logIn">
						<button className="text-sm text-blue-400 cursor-pointer">
							Have you already account? Log in here!
						</button>
					</Link>

					<p className="text-red-700">{errorMessage}</p>
					{errorMessage === "You're succesfully signed up!" && <Link to="/logIn"><p className="text-green-500">Log in here</p></Link>}
				</form>
			</div>
		</div>,
		document.body
	);
}
