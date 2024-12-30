//import { fetchData } from "src/utils/api";

import type { Event } from "src/types/events";

export const getEvent = async (id: string): Promise<Event> => {
  //return fetchData(`/activities/${id}`, { signal });

  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 33,
        name: "Masía fin de año 2024",
        description: "Event Description",
        location: "Lleida",
        from: new Date("2022-01-01"),
        to: new Date("2022-01-02"),
        owner: {
          id: 1,
          name: "Owner",
          surname: "Owner1 Surname",
          email: "test@gmail.com",
          image: "https://source.unsplash.com/random/100x100",
        },
        participants: [
          {
            id: 1,
            name: "User",
            surname: "User1 Surname",
            email: "test@gmail.com",
            image: "https://source.unsplash.com/random/100x100",
          }
        ],
        activities: [
          {
            id: 1,
            name: "Activity 1",
            description: "Activity 1 Description",
            from: new Date("2022-01-01 12:33"),
            to: new Date("2022-01-01 12:44"),
            owner: {
              id: 1,
              name: "Owner",
              surname: "Owner1 Surname",
              email: "test@gmail.com",
              image: "https://source.unsplash.com/random/100x100",
            },
            participants: [
              {
                id: 1,
                name: "User",
                surname: "User1 Surname",
                email: "test@gmail.com",
                image: "https://source.unsplash.com/random/100x100",
              }
            ],
          },
          {
            id: 2,
            name: "Activity 2",
            description: "Activity 2 Description",
            from: new Date("2022-01-01 12:33"),
            to: new Date("2022-01-01 12:44"),
            owner: {
              id: 1,
              name: "Owner",
              surname: "Owner1 Surname",
              email: "test@gmsail.com",
              image: "https://source.unsplash.com/random/100x100",
            },
            participants: [
              {
                id: 1,
                name: "User",
                surname: "User1 Surname",
                email: "test@gmail.com",
                image: "https://source.unsplash.com/random/100x100",
              },
            ],
          }
        ]
      });
    }, 1000);
  });
}

export const getEventDays = async (): Promise<any[]> => {
  //return fetchData(`/activities?date=${date}`, { signal });

  // Mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
        }
      ]);
    }, 1000);
  });
}
