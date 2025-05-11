interface ActionConfirmation {
	name: string;
	type: string;
	element: any;
	getMethod: () => void;
	directory: string;
	showActionConfFunc: React.Dispatch<React.SetStateAction<boolean>>;
	showActionConfValue: boolean;
}

export default function ActionConfirmation({
	type,
	name,
	element,
	getMethod,
	directory,
	showActionConfValue,
	showActionConfFunc,
}: ActionConfirmation) {
	return (
		<>
			{showActionConfValue && (
				<div className="absolute top-1/2 left-1/2 bg-gray-700 p-10 flex flex-col gap-2 items-center text-white">
					<h2>
						Are you sure you want to delete your{" "}
						<span className="text-red-500">"{name}"</span> {type}?
					</h2>
					<p>This action will delete your {type} forever!</p>
					<div className="flex gap-2">
						<button
                         className="cursor-pointer px-2 py-1 bg-amber-400"
							onClick={async () => {
								const elementId = element.id;
								const response = await fetch(
									`http://localhost:5151/api/${directory}/${elementId}`,
									{
										method: "DELETE",
										headers: {
											Authorization: `Bearer ${localStorage.getItem("token")}`,
										},
									}
								);

								if (response.ok) {
									getMethod();
								} else {
									console.log("sth went wrong");
								}

								showActionConfFunc(false);
							}}>
							Confirm
						</button>
						<button className="cursor-pointer px-2 py-1 bg-amber-400"  onClick={() => showActionConfFunc(false)}>Cancel</button>
					</div>
				</div>
			)}
		</>
	);
}
