import CardActivity from "@components/ui/CardActivity";
import { Suspense, useState } from "react";
import { getActivitiesByDate } from "src/services/activities";
import type { Activity } from "src/types/activities";
import styles from "./SelectionDays.module.css";
import classNames from "classnames";

interface SelectionDaysProps {
  activities: Activity[];
  eventDays: Date[];
  currentDay: Date;
}

const SelectionDays = ({ activities, eventDays, currentDay }: SelectionDaysProps) => {
  const [_activities, setActivities] = useState<any[]>(activities);
  const [_currentDay, setCurrentDay] = useState<Date>(currentDay);

  const handleCurrentDay = async (day: Date) => {
    setActivities([]);
    setCurrentDay(day);
    const activitiesResponse = await getActivitiesByDate(day);
    setActivities(activitiesResponse);
  }

  return (
    <section>
      <h2>Actividades</h2>
      <ul className={styles.scrollDays}>
        {eventDays.map((day) => (
          <li>
            <span className={classNames(
              styles.scrollDays__day,
              { [styles["scrollDays__day--active"]]: day.getDate() === _currentDay.getDate() }
            )} onClick={() => handleCurrentDay(day)}>
              {day.getDate()}
              <small>{day.toLocaleDateString("es-ES", { weekday: "short" })}</small>
            </span>
          </li>
        ))}
      </ul>
      <div className={styles.headerSection}>
        <h3>{_currentDay.toLocaleDateString("es-ES", { weekday: "long", day: "numeric" })}</h3>
      </div>
      {(_activities.length === 0) ?
        <p>Cargando...</p> :
        <ul className={styles.activitiesList}>
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
        </ul>}
    </section >
  );
}

export default SelectionDays;
