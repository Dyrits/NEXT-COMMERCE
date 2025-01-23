"use client"

import { useState } from "react";

import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import format from "@/lib/formatters";

export default function ProductForm() {
  const [price, setPrice] = useState(0);

  return (
    <form>
      <div className={"space-y-2"}>
        <Label htmlFor={"name"}>Name</Label>
        <Input type={"text"} id={"name"} name={"name"} required />
      </div>
      <div className={"space-y-2"}>
        <Label htmlFor={"price"}>Price in cents</Label>
        <Input
          type={"number"}
          id={"price"}
          name={"price"}
          required
          value={price}
          onChange={$event => { setPrice(Number($event.target.value) || 0); }}
        />
      </div>
      <div className={"text-muted-foreground"}>
        <p>{format.currency(price / 100)}</p>
      </div>
    </form>
  )
}