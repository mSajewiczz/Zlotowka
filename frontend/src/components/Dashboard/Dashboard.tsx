import { useContext } from "react";
import { AuthorizationContext } from "../../context/AuthorizationContext";
import { Link } from "@tanstack/react-router";
import Spends from "../Spends/Spends";

export default function Dashboard() {
	const { passedAuthorisation, userName } = useContext(AuthorizationContext);

	return (
		<>
			{passedAuthorisation ? (
				<div>
					<div className="flex flex-col gap-2 p-2 items-start">
						<h1 className="text-4xl">
							Welcome <span className="text-red-100">{userName}</span> in
							dashboard!
						</h1>
						<p className="text-xl">
							Here you can find all informations of your finance
						</p>
					</div>
					<Spends />
				</div>
			) : (
				<div className="flex flex-col gap-2 p-2 items-start">
					<h1 className="text-4xl">You aren't logged in.</h1>

					<Link to="/logIn">
						<p>Log in here</p>
					</Link>
				</div>
			)}
		</>
	);
}
