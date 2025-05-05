import { useContext } from "react";
import { AuthorizationContext } from "../../context/AuthorizationContext";
import { Link } from "@tanstack/react-router";

export default function Dashboard() {
    const { passedAuthorisation, userName } = useContext(AuthorizationContext);


	return (
		<>
			{passedAuthorisation ? (
				<div>
					<h1 className="text-4xl">Welcome {userName} in dashboard!</h1>
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
