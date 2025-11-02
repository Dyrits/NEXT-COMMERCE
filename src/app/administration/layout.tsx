import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function AdministrationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav>
        <NavLink href="/administration">Dashboard</NavLink>
        <NavLink href="/src/app/administration/products">Products</NavLink>
        <NavLink href="/administration/customers">Customers</NavLink>
        <NavLink href="/administration/sales">Sales</NavLink>
      </Nav>
      <div className="container my-6 mx-auto">{children}</div>
    </>
  );
}
