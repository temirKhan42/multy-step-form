'use client';

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/') {
      router.replace('/register?step=1');
    }
  }, [router]);

  return (
    <div>
    </div>
  );
}