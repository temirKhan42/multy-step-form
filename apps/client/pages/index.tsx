'use client';

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router) {
      router.replace('/register?step=1');
    }
  }, []);

  return (
    <div>
    </div>
  );
}