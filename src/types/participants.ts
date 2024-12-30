import type { Activity } from "./activities";
import type { User } from "./user";

export interface Participant {
  id: number;
  user: User;
  subscribed_activities: Activity[];
}
