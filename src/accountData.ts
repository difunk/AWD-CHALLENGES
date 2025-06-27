import type { Account } from "./types/Account";

export const accounts: Account[] = [
  {
    username: "alice123",
    status: "active",
    lastLogin: new Date("2025-06-20T10:15:00"),
  },
  {
    username: "bob_the_builder",
    status: "inactive",
  },
  {
    username: "charlie_pending",
    status: "pending",
    lastLogin: new Date("2025-05-30T08:00:00"),
  }
];