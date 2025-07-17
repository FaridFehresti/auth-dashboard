"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "../context/UserContext";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    } else {
      router.replace("/auth");
    }
  }, [user, router]);

  return <p style={{ textAlign: "center", marginTop: "50px", width: "100%", height:"100%", fontSize: "24px", display: "flex", justifyContent: "center", alignItems: "center" }}>Redirecting...</p>;
}
