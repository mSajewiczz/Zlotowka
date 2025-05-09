import { useContext } from "react";
import { AuthorizationContext } from "../../context/AuthorizationContext";
import { Link, useNavigate } from "@tanstack/react-router";
import { FaMinus, FaPlus  } from "react-icons/fa6";

export default function Dashboard() {
	const { passedAuthorisation, userName } = useContext(AuthorizationContext);
	const navigate = useNavigate();

	return (
		<>
			{passedAuthorisation ? (
				<div>
					<div className="flex flex-col gap-2 p-2 items-start">
						<h1 className="text-4xl">
							Welcome <span className="text-blue-500">{userName}</span> in
							dashboard!
						</h1>
						<p className="text-xl">
							Here you can find all informations of your finance
						</p>
					</div>
					<div className="flex flex-col items-start gap-2 p-2 text-xl">
						<button
							className="bg-red-500 cursor-pointer px-2 py-1 flex items-center gap-2 flex-row-reverse"
							onClick={() => {
								navigate({ to: "/dashboard/spends" });
							}}>
							<FaMinus/>
							Show your spends
						</button>

						<button
							className="bg-red-500 cursor-pointer px-2 py-1 flex items-center gap-2 flex-row-reverse"
							onClick={() => {
								navigate({ to: "/dashboard/incomes" });
							}}>
							<FaPlus />
							Show your incomes
						</button>
					</div>
				</div>
			) : (
				<div className="flex flex-col gap-2 p-2 items-start">
					<h1 className="text-4xl">You aren't logged in.</h1>

					<Link to="/logIn">
						<p className="bg-amber-400 px-2 py-1 text-2xl">Log in here</p>
					</Link>
				</div>
			)}
		</>
	);
}
