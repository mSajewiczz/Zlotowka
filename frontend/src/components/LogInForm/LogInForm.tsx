import { createPortal } from "react-dom";

interface LogInForm {
	show: boolean,
    close: () => void
}

export default function LogInForm({ show, close }: LogInForm) {
	return createPortal(
		<div className="absolute bg-red-500 w-screen h-screen z-10 top-0">
			{show && (
				<div>
					<h2>Log in</h2>
                    <button className="cursor-pointer" onClick={close}>Go back</button>
					<form action="">
						<input type="text" placeholder="username" />
						<input type="password" placeholder="password" />
						<input type="submit" />
					</form>
				</div>
			)}
		</div>, document.body
	);
}
