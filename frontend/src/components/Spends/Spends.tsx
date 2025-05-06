import { useEffect, useState } from "react";
import ManageForm from "../ManageForm/ManageForm";
import { FaPlus } from "react-icons/fa6";
export default function Spends() {

	const [showForm, setShowForm] = useState(false);
    const [data, setData] = useState({});


	const title = "Spend";

	const handleOpenSpendForm = () => {
		setShowForm(true);
	};

	async function getSpends() {

		const response = await fetch("http://localhost:5151/api/spend/spends", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});


        if(response.ok) {
            const data = await response.json();
            const currData = data.map((element:string) => <li>{element}</li>)
            setData(currData);
            
            // setData(await response.json());
        } else {
        }
	}

	useEffect(() => {
        // getSpends(); 
	}, [getSpends, data]);

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

			<h3>List of your spends</h3>
            <p></p>
			{showForm && (
				<ManageForm title={title} onClose={() => setShowForm(false)} />
			)}
		</div>
	);
}
