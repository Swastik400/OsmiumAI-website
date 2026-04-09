import type { ReactNode } from "react";

export default function NewsLayout({ children }: { children: ReactNode }) {
  return <div data-hide-footer>{children}</div>;
}
