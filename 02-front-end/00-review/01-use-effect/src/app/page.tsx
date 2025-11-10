"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "useEffect Hook Review Homepage";
  }, []);

  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
}
