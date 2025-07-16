"use client";

import { useUsers } from "@/hooks/useUsers";

export default function UserList() {
  const { data, isLoading, error } = useUsers("usuarios");

  if (isLoading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.map((user) => (
        <div key={user._id}>
          <h1>{user.fullName}</h1>
        </div>
      ))}
    </div>
  );
}   