import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-2 items-start  p-2">
			<h2 className="text-3xl">
				<span className="text-red-100">"Złotówka"</span> it's an app, that will
				enhance your level of manage finance.
			</h2>
			<p className="text-2xl">
				By possibility of controlling your spends, incomes, goals and savings
				you will reach higher level of awareness in finance world.
			</p>

			<h3 className="text-xl">How to start?</h3>
			<ol>
        <li>1. Create an account on our web application.</li>
        <li>2. In dashboard write your first spends, incomes, goals, savings etc.</li>
        <li>3. Do it every time, when you get new income / do new spend / set new goals and so on. </li>
        <li>4. Get access to the charts that will show you your incomes/spends/savings in the perspective of weeks, months and even years.</li>
      </ol>

      <p>Here starts entire adventure with aware management of your finance!</p>
      <Link className="bg-amber-100 px-2 py-1 " to="/logIn">Sign up for free</Link>
		</div>
	);
}
