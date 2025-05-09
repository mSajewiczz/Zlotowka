import { useEffect, useState } from "react";
import ManageForm from "../ManageForm/ManageForm";
import { FaPlus } from "react-icons/fa6";
import { Link } from "@tanstack/react-router";
import DataRender from "../DataRender/DataRender";
export default function Spends() {
	const [showForm, setShowForm] = useState(false);
	const [data, setData] = useState([]);
	const title = "spend";

	async function getSpends() {
		const response = await fetch("http://localhost:5151/api/spend/spends", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});

		if (response.ok) {
			const data = await response.json();
			setData(data);
		} else {
			console.log("sth went wrong");
		}
	}

	const handleOpenSpendForm = () => {
		setShowForm(true);
	};

	useEffect(() => {
		getSpends();
	}, []);

	return (
		<div id="spends">
			<div className="flex  p-2 gap-2 items-center">
				<h2 className="text-2xl text-red-400">Your spends</h2>
				<button
					className="bg-red-50 px-2 py-1 cursor-pointer flex gap-1 items-center"
					onClick={handleOpenSpendForm}>
					<FaPlus />
					Add new spend
				</button>
				<Link to="/dashboard/overview">
					<button className="bg-red-500">Go back to dashboard</button>
				</Link>
			</div>

			<div className="flex flex-col justify-center items-center gap-2">
				<div className="flex gap-2">
					<h3 className="pb-2 text-xl text-amber-700 bg-white py-1 px-2">
						List of your spends
					</h3>{" "}
					<button
						className="bg-white px-3 cursor-pointer"
						onClick={handleOpenSpendForm}>
						<FaPlus />
					</button>
				</div>
				<DataRender title="spend" data={data} directory="spend/spends" />
			</div>

			{showForm && (
				<ManageForm
					title={title}
					getMethod={getSpends}
					onClose={() => setShowForm(false)}
					directory="spend/spends"
				/>
			)}
		</div>
	);
}
