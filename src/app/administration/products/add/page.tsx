import { PageTitle } from "@/components/@administration/PageTitle";
import ProductForm from "@/components/@administration/@products/ProductForm";

export default function ProductsCreatePage() {
  return (
    <>
      <PageTitle>Add a new product</PageTitle>
      <ProductForm />
    </>
  )
}