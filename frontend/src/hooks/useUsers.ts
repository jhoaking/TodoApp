import { useMutation, useQuery } from "@tanstack/react-query";
import { EmployType } from "@/types/interfaces/usersInterface";
import { getUsers, postEmplooys } from "@/services/UserService";

export const useUsers = (endpoint: string) => {
  const get = useQuery<EmployType[], Error>({
    queryKey: ["emplooys", endpoint],
    queryFn: () => getUsers(endpoint), retry: false,
    enabled: true,

  });

  const post = useMutation<EmployType, Error, EmployType>({
    mutationFn: (newUser) => postEmplooys(endpoint, newUser),
  });


  return { get, post}
};

