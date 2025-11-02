"use server";

import * as fs from "node:fs/promises";
import { redirect } from "next/navigation";
import { z } from "zod";
import database from "@/database";

const zFile = z.instanceof(File).refine((file) => file.size);
const zImage = zFile.refine((file) => file.type.startsWith("image/"));

const zNewProduct = z.object({
  description: z.string().min(1),
  file: zFile,
  image: zImage,
  name: z.string().min(1),
  price: z.coerce.number().int().min(1),
});

export async function add(_: unknown, data: FormData) {
  const product = zNewProduct.safeParse(Object.fromEntries(data.entries()));
  if (!product.success) {
    return z.flattenError(product.error);
  }

  await fs.mkdir("products", { recursive: true });
  const file = `products/${crypto.randomUUID()}-${product.data.file.name}`;
  await fs.writeFile(file, Buffer.from(await product.data.file.arrayBuffer()));

  await fs.mkdir("public/products", { recursive: true });
  const image = `public/products/${crypto.randomUUID()}-${product.data.image.name}`;
  await fs.writeFile(image, Buffer.from(await product.data.image.arrayBuffer()));

  await database.product.create({ data: { ...product.data, file, image } });

  redirect("/administration/products");
}
