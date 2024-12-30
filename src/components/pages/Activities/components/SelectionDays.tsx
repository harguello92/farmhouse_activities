import CardActivity from "@components/ui/CardActivity";
import { useState } from "react";
import { getActivitiesByDate } from "src/services/activities";
import type { Activity } from "src/types/activities";

interface SelectionDaysProps {
  activities: Activity[];
  eventDays: Date[];
  currentDay: Date;
}

const SelectionDays = ({ activities, eventDays, currentDay }: SelectionDaysProps) => {
  const [_activities, setActivities] = useState<any[]>(activities);
  const [_currentDay, setCurrentDay] = useState<Date>(currentDay);

  const handleCurrentDay = async (day: Date) => {
    setCurrentDay(day);
    const activitiesResponse = await getActivitiesByDate(day);
    setActivities(activitiesResponse);
  }

  return (
    <section>
      <h2>Actividades</h2>
      <ul className="scrollDays">
        {eventDays.map((day) => (
          <li>
            <span className="scrollDays__day" onClick={() => handleCurrentDay(day)}>
              {day.getDay()}
              <small>{day.toLocaleDateString("es-ES", { weekday: "short" })}</small>
            </span>
          </li>
        ))}
      </ul>
      <div className="headerSection">
        <h3 className="app-activities-title">{_currentDay.toLocaleDateString("es-ES", { weekday: "long", day: "numeric" })}</h3>
      </div>
      <ul className="activitiesList app-activities-list">
        {_activities.map((activity: Activity) => (
          <li key={activity.id}>
            <CardActivity
              title={activity.name}
              description={activity.description}
              from={activity.from}
              to={activity.to}
              owner={activity.owner}
              participantsCount={activity.participants.length}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SelectionDays;
