import { createData, deleteData, fetcher } from "@/lib/fetcher";
import { EmployType } from "@/types/interfaces/usersInterface";


const API_URL = "http://localhost:4000";

export const getUsers = async (endpoint: string): Promise<EmployType[]> => {
  return await fetcher<EmployType[]>(`${API_URL}/${endpoint}`);
};


export const postEmplooys = async (
  endpoint: string,
  data: EmployType
): Promise<EmployType> => {
  return await createData<EmployType>(`${API_URL}/${endpoint}`, data);
};


export const deleteEmploys = async (endpoint: string, id: number): Promise<EmployType> => {
  return await deleteData<EmployType>(`${API_URL}/${endpoint}/${id}`);
};
