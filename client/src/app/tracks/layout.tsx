import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function TracksLayout({
  children,
}: Props) {
  return (
    <main className="w-6/10 mx-auto">
      {children}
    </main>
  );
}
