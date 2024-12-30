//import { fetchData } from "src/utils/api";

import type { Activity } from "src/types/activities";
import type { AppDate } from "src/types/dates";


export const getActivitiesByDate = async (date: Date): Promise<Activity[]> => {
  //return fetchData(`/activities?date=${date}`, { signal });

  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Actividad 1",
          description: "Descripción de la actividad 1",
          from: new Date(),
          to: new Date(),
          owner: {
            id: 1,
            name: "Propietario 1",
            surname: "Apellido 1",
            email: "test@gmail.com",
            image: "https://randomuser.me/api/portraits"
          },
          participants: [
            {
              id: 2,
              name: "Participante 1",
              surname: "Apellido 1",
              email: "test@gmail.com",
              image: "https://randomuser.me/api/portraits"
            },
          ]
        }
      ]);
    }, 1000);
  });
}
