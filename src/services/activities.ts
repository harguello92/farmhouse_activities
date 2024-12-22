import { fetchData } from "src/utils/api";

export const getActivitiesByDay = async (date: string) => {
  return fetchData(`/activities?date=${date}`);
}
