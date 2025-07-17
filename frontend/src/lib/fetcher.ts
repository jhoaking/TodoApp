import axios from 'axios'

export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }

  const data = await res.json();
  return data as T;
}

export async function createData<T>(url: string, data: T): Promise<T> {
  try {
    const res = await axios.post<T>(url, data);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Error desconocido");
  }
}

export const deleteData = async <T>(url: string): Promise<T> => {
  try {
    const res = await axios.delete<T>(url);
    return res.data;
  } catch (error: any) {
    console.error("Error al eliminar:", error);
    throw new Error(error?.response?.data?.message || "Error al eliminar el recurso");
  }
};
