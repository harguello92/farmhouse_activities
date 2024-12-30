import type { Activity } from "./activities";
import type { User } from "./user";

export interface Event {
  id: number;
  name: string;
  description: string;
  location: string;
  from: Date;
  to: Date;
  owner: User;
  participants: User[];
  activities: Activity[];
}
