import { createFileRoute, Link } from "@tanstack/react-router";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import ManageForm from "../../components/ManageForm/ManageForm";
import { MdDelete } from "react-icons/md";
import DataRender from "../../components/DataRender/DataRender";

export const Route = createFileRoute("/dashboard/incomes")({
	component: RouteComponent
});

function RouteComponent() {
  const [data, setData] = useState([]);
	const [showForm, setShowForm] = useState(false);
  const title = "income"

  async function getSpends() {
    // THAT WILL BE FOR GETTING DATA FROM SERVER 
		const response = await fetch("http://localhost:5151/api/income/incomes", {
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

  useEffect(() => {
    getSpends();
  }, [])


	return (
		<div>
			<div className="flex  p-2 gap-2 items-center">
				<h2 className="text-2xl text-red-400">Your incomes</h2>
				<button className="bg-red-50 px-2 py-1 cursor-pointer flex gap-1 items-center" onClick={() => setShowForm(true)}>
					<FaPlus />
					Add new income
				</button>
				<Link to="/dashboard/overview">
					<button className="bg-red-500 cursor-pointer">Go back to dashboard</button>
				</Link>
			</div>

      <DataRender title="income" data={data} directory="income/incomes"/>


      {showForm && (
              <ManageForm
                title={title}
                getMethod={getSpends}
                onClose={() => setShowForm(false)}
                directory = "income/incomes"
              />
            )}

            {/*FOR TODAY: DISPLAY DATA FROM INCOMES TABEL IN DB */}
		</div>
	);
}
