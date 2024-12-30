import type { User } from "./user";

export interface Activity {
  id: number;
  name: string;
  description: string;
  from: Date;
  to: Date;
  owner: User;
  participants: User[];
}
