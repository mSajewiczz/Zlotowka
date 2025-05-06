import { useEffect, useState } from "react";
import ManageForm from "../ManageForm/ManageForm";
import { FaPlus } from "react-icons/fa6";
export default function Spends() {
	const [showForm, setShowForm] = useState(false);
	const [data, setData] = useState([]);
    const [count, setCount] = useState();

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
				<h3 className="pb-2 text-xl text-amber-700 bg-white py-1 px-2">List of your spends</h3>
				<ul className="flex flex-col gap-2">
					{data.length === 0 ? <p className="text-red-800">You have no spends, congratulations!</p> : data.map((spend: any) => (
						<li key={spend.title}  className="bg-white text-blue-600 py-1 px-2">
                        {spend.title} - <span className="text-red-500">{spend.amount} zł</span> - {spend.date}
                   </li>
					))}
				</ul>
                <p>SUM:{count} </p>
			</div>

			{showForm && (
				<ManageForm
					title={title}
					getMethod={getSpends}
					onClose={() => setShowForm(false)}
				/>
			)}
		</div>
	);
}
