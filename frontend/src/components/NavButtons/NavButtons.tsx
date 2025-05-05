import { Link } from "@tanstack/react-router";
import { AuthorizationContext } from "../../context/AuthorizationContext";
import { useContext } from "react";

export default function NavButtons() {
	const { passedAuthorisation } = useContext(AuthorizationContext);
	const { setAuth } = useContext(AuthorizationContext);

	const handleLogOut = () => {
		setAuth({ passedAuthorisation: false, userName: "" });
		localStorage.clear();
	};

	return (
		<>
			{passedAuthorisation ? (
				<div className="p-2 flex gap-2">
					<Link to="/">
						{" "}
						<button
							onClick={handleLogOut}
							className="cursor-pointer bg-amber-300 px-4 py-1">
							Log out
						</button>
					</Link>
				</div>
			) : (
				<div className="p-2 flex gap-2">
					<Link to="/logIn">
						<button className="cursor-pointer bg-amber-300 px-4 py-1">
							Log in
						</button>
					</Link>
					<Link to="/signUp">
						<button className="cursor-pointer bg-amber-300 px-4 py-1">
							Sign up
						</button>
					</Link>
				</div>
			)}
		</>
	);
}
