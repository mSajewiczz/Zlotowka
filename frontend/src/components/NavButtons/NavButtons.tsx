import { Link } from "@tanstack/react-router";

export default function NavButtons() {
	return (
		<div className="p-2 flex gap-2">
            <Link to="/logIn"><button className="cursor-pointer bg-amber-300 px-4 py-1">Log in</button></Link>
            <Link to="/signUp"><button className="cursor-pointer bg-amber-300 px-4 py-1">Sign up</button></Link>
		</div>
	);
}
