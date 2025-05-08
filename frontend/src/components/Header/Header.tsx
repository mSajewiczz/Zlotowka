import { Link } from "@tanstack/react-router";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Header() {
	return (
		<div className="flex flex-col p-5 justify-center items-center mb-50 mt-30  text-black ">
			<div className="flex items-start flex-col justify-center gap-8 sm:gap-7">
				<p className="text-sm sm:text-lg">
					INTELLIGENT, EFFECTIVE MONEY MANAGEMENT.
				</p>
				<h1 className="text-4xl sm:text-5xl md:text-6xl">
					Controll your finance with{" "}
					<span className="text-blue-600">Złotówka</span>
				</h1>
				<p className="text-lg sm:text-xl  md:text-2xl">
					Złotówka is a program that can help you manage your money properly
				</p>

				<div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
					<Link to="/about">
						<button className="px-6 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 flex h-12 items-center rounded-md text-lg  sm:text-xl md:text-2xl cursor-pointer bg-white transition-all hover:bg-blue-200">
							<p>Get started</p>
						</button>
					</Link>

					<Link to="/about">
						<button className="px-6 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 group relative flex h-12 items-center gap-2 justify-center overflow-hidden rounded-md bg-neutral-950  text-neutral-200 cursor-pointer text-lg sm:text-xl md:text-2xl">
							<span>Learn more</span>
							<div className="ml-1 mt-1 transition group-hover:translate-x-1">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="h-7 w-7">
									<path
										d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"></path>
								</svg>
							</div>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
