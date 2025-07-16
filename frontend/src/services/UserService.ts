import { fetcher } from "@/lib/fetcher";
import { EmployType } from "@/types/interfaces/usersInterface";


const API_URL = "http://localhost:4000";

export const getUsers = async (endpoint: string): Promise<EmployType[]> => {
  console.log("[getUsers] fetching from", `${API_URL}/${endpoint}`);
  return await fetcher<EmployType[]>(`${API_URL}/${endpoint}`);
};
