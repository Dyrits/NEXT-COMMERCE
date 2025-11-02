import type { ReactNode } from "react";

export function PageTitle({ children }: Readonly<{ children: ReactNode }>) {
  return <h1 className={"text-4xl"}>{children}</h1>;
}
