"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { User } from "@/interface/random-user"; 
import styles from "./Auth.module.scss";

export default function Auth() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) router.replace("/dashboard");
  }, [user, router]);

  const validatePhone = (value: string) => /^09\d{9}$/.test(value);

  const handleLogin = async () => {
    if (loading) return;

    if (!validatePhone(phone)) {
      setError("Invalid phone number. It should start with 09 and have 11 digits.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();

      const randomUser: User = data.results[0];

      setUser(randomUser);
      localStorage.setItem("user", JSON.stringify(randomUser));

      router.replace("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.form}>
        <h1 className={styles.title}>Sign In</h1>
        <label>Phone Number (Iran)</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="09xxxxxxxxx"
        />
        {error && <p className={styles.error}>{error}</p>}
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </div>
    </div>
  );
}
