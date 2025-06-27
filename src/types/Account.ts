export interface Account {
  username: string;
  status: Status;
  lastLogin?: Date;
}

export type Status = "active" | "inactive" | "pending";