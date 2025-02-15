"use client";
import { Spinner } from "@heroui/react";
import PlaceHolder from "./components/PlaceHolder";
import useUsers from "./hooks/useUsers";

const DataUsers = () => {
  const { loading } = useUsers();
  return (
    <div>
      {loading ? (
        <div className=" flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <PlaceHolder />
      )}
    </div>
  );
};
export default DataUsers;
