import { useEffect, useState } from "react";
import ManageForm from "../ManageForm/ManageForm";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
export default function Spends() {
	const [showForm, setShowForm] = useState(false);
	const [showDetails, setShowDetails] = useState({
		title: "",
		date: "",
		amount: 0,
		state: false,
	});
	const [data, setData] = useState([]);
	const [count, setCount] = useState(0);

	data.map((spend: any) => spend.date);

	const title = "Spend";

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
				<ul className="flex flex-col gap-2">
					{data.length === 0 ? (
						<p className="text-red-800">You have no spends, congratulations!</p>
					) : (
						data.map((spend: any) => (
							<li
								key={spend.id}
								className="bg-white text-blue-600 py-1 px-2 flex gap-2 items-center">
								{spend.title} -{" "}
								<span className="text-red-500">{spend.amount} zł</span> -{" "}
								{spend.date}{" "}
								<button className="cursor-pointer">
									<MdDelete />
								</button>
								<button
									onClick={async () => {
										const spendId = spend.id;
										const userId = spend.userId;

										console.log(spendId + ", " + userId);

										const response = await fetch(
											`http://localhost:5151/api/spend/spends/${spendId}`,
											{
												method: "GET",
												headers: {
													Authorization: `Bearer ${localStorage.getItem("token")}`,
												},
											}
										);

										if (response.ok) {
											console.log("works!");
											console.log(response);
										} else {
											console.log("sth went wrong");
										}

										setShowDetails({
											...showDetails,
											title: spend.title,
											date: spend.date,
											amount: spend.amount,
											state: true,
										});

										// const spendId =
										//userId, spendId
									}}
									className="bg-green-500 cursor-pointer">
									Check details
								</button>
							</li>
						))
					)}
				</ul>
				<p>SUM: {count} zł</p>
			</div>

			{showForm && (
				<ManageForm
					title={title}
					getMethod={getSpends}
					onClose={() => setShowForm(false)}
				/>
			)}

			{showDetails.state && (
				<div className="absolute top-1/2 left-1/2  bg-gray-700 p-10 flex flex-col gap-2 items-center text-white">
					<h3>Your details of spend</h3>{" "}
					<button
						className="cursor-pointer"
						onClick={() => setShowDetails({ ...showDetails, state: false })}>
						Close
					</button>
					<ul>
						<h4>{showDetails.title}</h4>
						<p>{showDetails.amount} zł,</p>
						<p>{showDetails.date}</p>
					</ul>
				</div>
			)}
		</div>
	);
}
