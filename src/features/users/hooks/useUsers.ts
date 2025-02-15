"use client";
import { useState, useEffect, useMemo } from "react";
import getListUsers from "../services/getListUsers";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    getUsersHook();
  }, []);

  const getUsersHook = async () => {
    setLoading(true);
    const data = await getListUsers();
    setUsers(data);
    setLoading(false);
  };

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return users?.slice(start, end);
  }, [users, page]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };
  const totalPages = Math.ceil((users?.length || 0) / itemsPerPage);
  return {
    paginatedUsers,
    handlePageChange,
    totalPages,
    loading,
  };
};

export default useUsers;
