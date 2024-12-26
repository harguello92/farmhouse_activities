import { fetchData } from "src/utils/api";

export const getActivitiesByDay = async (date: string, signal: AbortSignal) => {
  return fetchData(`/activities?date=${date}`, { signal });
}
