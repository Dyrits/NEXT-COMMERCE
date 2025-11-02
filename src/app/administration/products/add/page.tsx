import ProductForm from "@/components/@administration/@products/ProductForm";
import { PageTitle } from "@/components/@administration/PageTitle";

export default function ProductsCreatePage() {
  return (
    <>
      <PageTitle>Add a new product</PageTitle>
      <ProductForm />
    </>
  );
}
