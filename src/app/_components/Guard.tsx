"use client";

import { type Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Guard({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    if (!session?.user) router.push("/signin");
  }, [session, router]);

  if (!session?.user && pathname === "/signin") {
    return <>{children}</>;
  }

  if (session?.user) {
    return <>{children}</>;
  }
}
