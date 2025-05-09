import { useState } from "react";
import { MdDelete } from "react-icons/md";
interface DataRender {
	data: never[];
    title: string;
    directory: string
}

export default function DataRender({ data, title, directory }: DataRender) {
    const [showDetails, setShowDetails] = useState({
        title: "",
        date: "",
        amount: 0,
        state: false,
    });

	return (
		<div>
			<ul className="flex flex-col gap-2 items-center">
				{data.length === 0 ? (
					<p className="text-red-800">You have no {title}s, congratulations!</p>
				) : (
					data.map((element: any) => (
						<li
							key={element.id}
							className="bg-white text-blue-600 py-1 px-2 flex gap-2 items-center">
							{element.title} -{" "}
							<span className="text-red-500">{element.amount} zł</span> -{" "}
							{element.date}{" "}
							<button className="cursor-pointer">
								<MdDelete />
							</button>
							<button
								onClick={async () => {
									const elementId  = element.id;
									const response = await fetch(
									  `http://localhost:5151/api/${directory}/${elementId}`,
									  {
									    method: "GET",
									    headers: {
									      Authorization: `Bearer ${localStorage.getItem("token")}`,
									    },
									  }
									);
									if (response.ok) {
									  setShowDetails({
									    ...showDetails,
									    title: element.title,
									    date: element.date,
									    amount: element.amount,
									    state: true,
									  });
									} else {
									  console.log("sth went wrong");
									}
								}}
								className="bg-green-500 cursor-pointer">
								Check details
							</button>
						</li>
					))
				)}
			</ul>

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
