import { createPortal } from "react-dom";
interface ManageForm {
    onClose: () => void,
}

const handleCloseManageForm = () => {

}

export default function ManageForm( {onClose}: ManageForm) {
	return createPortal(
		<div className="absolute top-0 bg-red-700 w-screen h-screen">
			<h3>Manage form</h3>
            <button onClick={onClose}>Close</button>
		</div>,
		document.body
	);
}
