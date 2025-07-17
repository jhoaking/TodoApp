"use client";

import { useUsers } from "@/hooks/useUsers";

interface Props {
  params: string;
}

export default function UserList({ params }: Props) {
  const { data, isLoading, error } = useUsers(params);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-500 text-lg">Cargando usuarios...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-red-500 text-lg">Error: {error.message}</p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {data?.map((user) => (
        <div
          key={user._id}
          className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">{user.fullName}</h2>
          <p className="text-sm text-gray-500 mb-2">📧 {user.email}</p>
          <div className="flex justify-between text-sm text-gray-600">
            <span>🎂 Edad: {user.age}</span>
            <span>🎓 Rol: {user.role}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
