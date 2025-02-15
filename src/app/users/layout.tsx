import { Button } from "@heroui/react";
import Link from "next/link";

interface UsersLayoutProps {
  children: React.ReactNode;
}

const UsersLayout = ({ children }: UsersLayoutProps) => {
  return (
    <div className="p-10 ">
      <div className="flex flex-col justify-between items-center mb-10 ">
        <h1 className="text-2xl font-bold mb-7">Users</h1>
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </div>
      {children}
    </div>
  );
};
export default UsersLayout;
