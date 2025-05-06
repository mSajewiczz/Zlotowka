import { createPortal } from "react-dom";
import { useState } from "react";
interface ManageForm {
	onClose: () => void;
    title: string;
}

const handleCloseManageForm = () => {};




export default function ManageForm({ onClose, title }: ManageForm) {
	return createPortal(
		<div className="absolute top-1/2 left-1/2  bg-red-700 p-10 flex flex-col gap-2">
			<div className="flex justify-between">
				<h3 className="text-amber-400 text-2xl">New {title}</h3>
				<button
					className="bg-amber-400 cursor-pointer px-2 py-1"
					onClick={onClose}>
					Close
				</button>
			</div>
		</div>,
		document.body
	);
}
