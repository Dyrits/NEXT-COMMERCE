"use client";

import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { add } from "@/actions/@administration/@products/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import format from "@/lib/formatters";

export default function ProductForm() {
  const [errors, action] = useFormState(add, { fieldErrors: {}, formErrors: [] });
  const [price, setPrice] = useState(0);

  return (
    <form action={action}>
      <div className={"space-y-2"}>
        <Label htmlFor={"name"}>Name</Label>
        <Input id={"name"} name={"name"} required type={"text"} />
        {errors.fieldErrors && errors.fieldErrors.name && <div className={"text-destructive"}>{errors.fieldErrors.name.join(" | ")}</div>}
      </div>
      <div className={"space-y-2"}>
        <Label htmlFor={"price"}>Price in cents</Label>
        <Input
          id={"price"}
          name={"price"}
          onChange={($event) => {
            setPrice(Number($event.target.value) || 0);
          }}
          required
          type={"number"}
          value={price}
        />
        {errors.fieldErrors && errors.fieldErrors.price && <div className={"text-destructive"}>{errors.fieldErrors.price.join(" | ")}</div>}
      </div>
      <div className={"text-muted-foreground"}>
        <p>{format.currency(price / 100)}</p>
      </div>
      <div className={"space-y-2"}>
        <Label htmlFor={"description"}>Description</Label>
        <Textarea id={"description"} name={"description"} required />
        {errors.fieldErrors && errors.fieldErrors.description && <div className={"text-destructive"}>{errors.fieldErrors.description.join(" | ")}</div>}
      </div>
      <div className={"space-y-2"}>
        <Label htmlFor={"file"}>File</Label>
        <Input id={"file"} name={"file"} required type={"file"} />
        {errors.fieldErrors && errors.fieldErrors.file && <div className={"text-destructive"}>{errors.fieldErrors.file.join(" | ")}</div>}
      </div>
      <div className={"space-y-2"}>
        <Label htmlFor={"image"}>Image</Label>
        <Input id={"image"} name={"image"} required type={"file"} />
        {errors.fieldErrors && errors.fieldErrors.image && <div className={"text-destructive"}>{errors.fieldErrors.image.join(" | ")}</div>}
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type={"submit"}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
