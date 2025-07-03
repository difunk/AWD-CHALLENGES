import { fetchData } from '../api/fetchData';

export async function useData() {
  const data = await fetchData();
  return data.items;
}