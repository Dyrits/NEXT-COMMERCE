import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageTitle } from "@/components/@administration/PageTitle";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdministrationProductsPage() {
  return (
    <>
      <div className={"flex justify-between items-center gap-4"}>
        <PageTitle>Products</PageTitle>
        <Button asChild><Link href={"/administration/products/add"}>Add product</Link></Button>
      </div>
      <ProductTable />
    </>
  );
}

function ProductTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className={"w-0"}><span className={"sr-only"}>Available for purchase</span></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead className={"w-0"}><span className={"sr-only"}>Actions</span></TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  )
}