import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/incomes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/incomes"!</div>
}
