import { useQuery } from "@tanstack/react-query";
import { EmployType } from "@/types/interfaces/usersInterface";
import { getUsers } from "@/services/UserService";

export const useUsers = (endpoint: string) => {
  return useQuery<EmployType[], Error>({
    queryKey: ["users", endpoint],
    queryFn: () => getUsers(endpoint), retry: false,
    enabled: true,

  });
};
