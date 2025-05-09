import { Link } from "@tanstack/react-router";
import { AuthorizationContext } from "../../context/AuthorizationContext";
import { useContext } from "react";
import { BsPersonFill } from "react-icons/bs";

export default function NavButtons() {
	const { passedAuthorisation, userName } = useContext(AuthorizationContext);
	const { setAuth } = useContext(AuthorizationContext);

	const handleLogOut = () => {
		setAuth({ passedAuthorisation: false, userName: "" });
		localStorage.clear();
	};

	return (
		<>
			{passedAuthorisation ? (
				<div className="p-2 flex gap-2 items-center sm:text-xl">
					<p className="flex gap-1 items-center"><BsPersonFill />You're logged as {userName}</p>
					<Link to="/">
						{" "}
						<button
							onClick={handleLogOut}
							className="cursor-pointer bg-amber-300 px-4 py-1">
							Log out
						</button>
					</Link>
					<Link to="/dashboard/overview"><button className="cursor-pointer bg-amber-300 px-4 py-1">Go to dashboard</button></Link>
					
				</div>
			) : (
				<div className="p-2 flex gap-2 sm:text-xl">
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
