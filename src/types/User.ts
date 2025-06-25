export interface User {
    username: string, 
    status: "online" | "offline";
    lastActivity: number;
}