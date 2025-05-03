import { createPortal } from "react-dom";

interface SignUpForm {
	show: boolean,
    close: () => void
}

export default function SignUpForm({ show, close }: SignUpForm) {
	return createPortal(
		<div className="absolute bg-red-500 w-screen h-screen z-10 top-0">
			{show && (
				<div>
					<h2>Sing up</h2>
                    <button onClick={close} className="cursor-pointer">Go back</button>
					<form action="">
						<input type="text" placeholder="username" />
						<input type="password" placeholder="password" />
                        <input type="password" placeholder="repeat password" />
						<input type="submit" />
					</form>
				</div>
			)}
		</div>, document.body
	)
}
