import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

interface ManageForm {
	onClose: () => void;
	title: string;
}

export default function ManageForm({ onClose, title }: ManageForm) {
	const [data, setData] = useState({ title: "", date: "", amount: 0 });

	return createPortal(
		<div className="absolute top-1/2 left-1/2  bg-red-700 p-10 flex flex-col gap-2 items-center">
			<div className="flex justify-between">
				<h3 className="text-amber-400 text-2xl">New {title}</h3>
				<button
					className="text-xl text-amber-400 cursor-pointer p-2"
					onClick={onClose}>
					<IoMdClose />
				</button>
			</div>

			<form action="" className="flex flex-col gap-2">
				<label htmlFor="">
					<p className="text-amber-500">Title</p>
					<input
						value={data.title}
						onChange={e => setData({ ...data, title: e.target.value })}
						className="text-black border bg-white"
						type="text"
					/>
				</label>

				<label htmlFor="">
					<p className="text-amber-500">Amount</p>
					<input
						value={data.amount}
						onChange={e => setData({ ...data, amount: +e.target.value })}
						className="text-black border bg-white"
						type="number"
					/>
				</label>

				<label htmlFor="">
					<p className="text-amber-500">Date</p>
					<input
						value={data.date}
						onChange={e => setData({ ...data, date: e.target.value })}
						className="text-black border bg-white"
						type="date"
					/>
				</label>

				<button
					onClick={async e => {
						e.preventDefault();
						await fetch("http://localhost:5151/api/spend/spends", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
                                Authorization: `Bearer ${localStorage.getItem("token")}`
							},
							body: JSON.stringify({
								SpendTitle: data.title,
								SpendDate: data.date,
								SpendAmount: data.amount,
							}),
						});
					}}
					className="bg-amber-500 py-1 px-2 rounded cursor-pointer">
					Submit
				</button>
			</form>
		</div>,
		document.body
	);
}
