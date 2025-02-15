import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-7">Lista de usuarios</h1>
      <Link href="/users">
        <Button>Ver usuarios</Button>
      </Link>
    </div>
  );
}
