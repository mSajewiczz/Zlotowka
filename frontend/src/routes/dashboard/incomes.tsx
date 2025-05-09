import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import DataRender from "../../components/DataRender/DataRender";

export const Route = createFileRoute("/dashboard/incomes")({
	component: RouteComponent
});

function RouteComponent() {
  const [data, setData] = useState([]);

  async function getMethod() {
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
    getMethod();
  }, [])

	return (
		<div>
      <DataRender title="income" data={data} directory="income/incomes" getMethod={getMethod}/>
		</div>
	);
}
