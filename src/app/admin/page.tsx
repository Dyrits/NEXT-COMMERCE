import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import format from "@/lib/formatters";
import {  getDashboardData } from "@/lib/repositories";


export default async function AdminDashboard() {
  const data = await getDashboardData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard title="Sales" description={`${format.number(data.sales.count)} orders`} body={format.currency(data.sales.amount)} />
      <DashboardCard title="Customers" description={`${format.currency(data.users.value)} average value`} body={format.number(data.users.count)} />
      <DashboardCard title="Active products" description={`${format.number(data.products.unavailable)} inactive products`} body={format.number(data.products.available)} />
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
      <CardContent><p>{body}</p></CardContent>
    </Card>
  );
}