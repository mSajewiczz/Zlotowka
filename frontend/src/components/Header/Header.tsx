import { Link } from "@tanstack/react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {
	return (
		<div className="flex flex-col gap-2 p-5 items-start">
			<h1 className="text-4xl">
				Take care of your money with{" "}
				<span className="text-red-600">Złotówka</span>
			</h1>
			<p className="text-lg">
				App that can help you manage your spends & wages
			</p>

			<Link to="/about" className="[&.active]:font-bold">
				<button className="flex gap-2 items-center bg-red-100 py-2 px-5 rounded-lg text-lg cursor-pointer">
					Get started <FaArrowRight className="text-red-500" />
				</button>
			</Link>
		</div>
	);
}
