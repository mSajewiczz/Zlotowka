import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { MdDashboard } from 'react-icons/md';



export default function AppPresentataion() {
	return (
		<div className="flex flex-col gap-5 p-5 items-center ">
			<h2 className="text-3xl">Have real impact for your finance</h2>

			<div className="flex gap-2 p-2 items-center flex-wrap justify-center">
				<div className="flex flex-col gap-2 px-2 py-1 sm:w-1/4">
					<div className="flex items-center gap-2">
						<FaChartLine size={40} color="blue"/>
						<h3 className="text-2xl text-blue-800">Budget tracking</h3>
					</div>
					<p className="text-xl">
						Keep all your incomes and spends in one place so you always know
						where your money goes.
					</p>
				</div>

				<div className="flex flex-col gap-2 px-2 py-1 sm:w-1/4">
					<div className="flex items-center gap-2">
						<FaChartPie size={40} color="blue"/>
						<h3 className="text-2xl text-blue-800">Real-time insights</h3>
					</div>
					<p className="text-xl">
						Get up-to-the-minute charts and summaries of your spending habits as
						they happen.
					</p>
				</div>

				<div className="flex flex-col gap-2 px-2 py-1 sm:w-1/4">
					<div className="flex items-center gap-2">
						<GrSecure size={40} color="blue"/>
						<h3 className="text-2xl text-blue-800">Secure authentication</h3>
					</div>
					<p className="text-xl">
						Your data stays safe with industry-standard JWT login and encrypted
						password storage.
					</p>
				</div>

				<div className="flex flex-col gap-2 px-2 py-1 sm:w-1/4">
					<div className="flex items-center gap-2">

						<h3 className="text-2xl  text-blue-800">Custom categories</h3>
					</div>
					<p className="text-xl">
						Create and organize your own spending categories to match your
						unique lifestyle.
					</p>
				</div>

				<div className="flex flex-col gap-2 px-2 py-1 sm:w-1/4">
					<div className="flex items-center gap-2">
						<MdDashboard size={40} color="blue"/>
						<h3 className="text-2xl text-blue-800">Intuitive layout</h3>
					</div>
					<p className="text-xl">
						Enjoy a clean, user-friendly interface that makes managing your
						finances so easy.
					</p>
				</div>
			</div>
		</div>
	);
}
