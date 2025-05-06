import {useState} from "react";
import ManageForm from "../ManageForm/ManageForm";
export default function Spends() {
    const [showForm, setShowForm] = useState(false);
    const {spend, setSpend} = useState({title: "", date: "", amount: ""});

    const title = "Spend";

    const handleOpenSpendForm = () => {
        setShowForm(true);
    }


	return (
		<div className="flex flex-col p-2 gap-2 items-start">
			<h2 className="text-2xl text-red-400">Your spends</h2>
            <button className="bg-red-50 px-2 py-1 cursor-pointer" onClick={handleOpenSpendForm}>Add new spend</button>


            {showForm && <ManageForm title = {title} category = {spend}  onClose = {() => setShowForm(false)}/>}

		</div>
	);
}
