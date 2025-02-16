"use client";
import { Pagination } from "@heroui/react";
import useUsers from "../hooks/useUsers";

interface placeHolderProps {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}
const PlaceHolder = () => {
  const { paginatedUsers, handlePageChange, totalPages } = useUsers();

  return (
    <div className="h-screen flex flex-col gap-5 ">
      <div className="flex flex-col md:flex-row gap-5 justify-evenly">
        {paginatedUsers?.map((user: placeHolderProps) => (
          <div
            className="border-2 border-gray-300 rounded-md p-2"
            key={user.id}
          >
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h3>{user.address.city}</h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Pagination
          showControls
          initialPage={1}
          total={totalPages}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default PlaceHolder;
