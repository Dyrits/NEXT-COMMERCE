import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import format from "@/lib/formatters";
import { getDashboardData } from "@/lib/repositories";

export default async function AdministrationDashboard() {
  const data = await getDashboardData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard body={format.currency(data.sales.amount)} description={`${format.number(data.sales.count)} orders`} title="Sales" />
      <DashboardCard body={format.number(data.users.count)} description={`${format.currency(data.users.value)} average value`} title="Customers" />
      <DashboardCard
        body={format.number(data.products.available)}
        description={`${format.number(data.products.unavailable)} inactive products`}
        title="Active products"
      />
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  description: string;
  body: string;
};

function DashboardCard({ title, description, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
