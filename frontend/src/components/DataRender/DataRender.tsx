import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { Link } from "@tanstack/react-router";
import ManageForm from "../ManageForm/ManageForm";
import ActionConfirmation from "../ActionConfirmation/ActionConfirmation";


interface DataRender {
	data: never[];
	title: string;
	directory: string;
	getMethod: () => void;
}

export default function DataRender({
	data,
	title,
	directory,
	getMethod,
}: DataRender) {
	const [showDetails, setShowDetails] = useState({
		title: "",
		date: "",
		amount: 0,
		state: false,
	});

	const convertDate = (dateVal: string) => {
		let date: any = [];

		for (let i = 0; i < 10; i++) {
			date[i] = dateVal[i];
		}

		return `${date[8]}${date[9]}.${date[5]}${date[6]}.${date[0]}${date[1]}${date[2]}${date[3]}`;
	};

	const [element, setElement] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [showActionConf, setShowActionConf] = useState(false);

	return (
		<div className="flex flex-col ">
			<div className="flex flex-col gap-2 p-2">
				<h2 className="text-4xl">Your {title}s</h2>
				<div className="flex gap-2">
					<button
						onClick={() => setShowForm(true)}
						className="px-2 py-1 flex items-center gap-2 cursor-pointer bg-red-500">
						<FaPlus />
						Add new {title}
					</button>
					<Link to="/dashboard/overview">
						<button className="px-2 py-1 cursor-pointer bg-red-500">
							Go back to dashboard
						</button>
					</Link>
				</div>
			</div>

			<div className="flex flex-col p-2">
				<div className="flex flex-col  ">
					<h2 className="text-2xl">List of your {title}s</h2>
					<label htmlFor="" className="flex">
						<p>Sort by</p>
						<input list="sort" className="border" />
						<datalist id="sort">
							<option value="title"></option>
                            <option value="amount"></option>
                            <option value="date"></option>
						</datalist>
					</label>
					<ul className="flex flex-col gap-2 overflow-auto h-200">
						{data.length === 0 ? (
							<p className="text-red-800">
								You have no {title}s, congratulations!
							</p>
						) : (
							data.map((element: any) => (
								<li
									key={element.id}
									className="bg-white text-blue-600 py-1 px-2 flex flex-col  gap-2 items-center w-full justify-between">
									<h2 className="text-xl">{element.title}</h2>
									<div className="flex gap-2">
										{title === "spend" ? (
											<span className="text-red-500">-{element.amount} zł</span>
										) : (
											<span className="text-green-500">
												+{element.amount} zł
											</span>
										)}
										<p>{convertDate(element.date)}</p>
									</div>
									<div className="flex flex-row-reverse gap-1">
										<button
											className="cursor-pointer px-2 py-1"
											onClick={() => {
												setShowActionConf(true);
												setElement(element);
											}}>
											<MdDelete />
										</button>
										<button
											onClick={async () => {
												const elementId = element.id;
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
											className="bg-green-500 cursor-pointer px-2 py-1">
											Check details
										</button>
									</div>
								</li>
							))
						)}
					</ul>
				</div>
			</div>

			{showDetails.state && (
				<div className="absolute top-1/2 left-1/2  bg-gray-700 p-10 flex flex-col gap-2 items-center text-white">
					<h3>Your details of {title}</h3>{" "}
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

			{showForm && (
				<ManageForm
					title={title}
					getMethod={getMethod}
					onClose={() => setShowForm(false)}
					directory={directory}
				/>
			)}

			{showActionConf && (
				<ActionConfirmation
					type={title}
					name={element.title}
					element={element}
					getMethod={getMethod}
					directory={directory}
					showActionConfFunc={setShowActionConf}
					showActionConfValue={showActionConf}
				/>
			)}
		</div>
	);
}
