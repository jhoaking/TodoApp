

export async function fetcher<T>(url: string): Promise<T> {
  console.log("[fetcher] fetching URL:", url);
  const res = await fetch(url);
    
  if (!res.ok) {
    console.error("[fetcher] response not ok:", res.status);
    throw new Error(`Error: ${res.statusText}`);
  }

  const data = await res.json();
  console.log("[fetcher] response data:", data);

  return data as T;
}
