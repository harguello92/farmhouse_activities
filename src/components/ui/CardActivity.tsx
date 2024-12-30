import type { User } from "src/types/user";
import Card from "./Card";
import styles from "./CardActivity.module.css";

interface CardActivityProps {
  title: string;
  description: string;
  from: Date;
  to: Date;
  owner: User;
  participantsCount: number;
}

const CardActivity = ({ title, description, from, to, owner, participantsCount }: CardActivityProps) => (
  <Card>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
    <p className={styles.schedule}>{from.toLocaleString("es-ES")} - {to.toLocaleString("es-ES")}</p>
    <p className={styles.author}>{owner.name}</p>
    <p className={styles.participants}>{participantsCount}</p>
  </Card>
);

export default CardActivity;
