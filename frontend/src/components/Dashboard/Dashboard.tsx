import { useContext } from "react";
import { AuthorizationContext } from "../../context/AuthorizationContext";
import { Link } from "@tanstack/react-router";

export default function Dashboard() {
	const contxt = useContext(AuthorizationContext);

	return (
		<>
			{contxt.passedAuthorisation ? (
				<div>
					<h1 className="text-4xl">Welcome {contxt.userName} in dashboard!</h1>
				</div>
			) : (
				<div>
					<h1 className="text-4xl">
						You aren't logged in.
					</h1>

                    <Link to="/logIn">
							<p>Log in here</p>
						</Link>
				</div>
			)}
		</>
	);
}
