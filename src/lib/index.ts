import { User } from "../interfaces/index";
export const displayUserName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`;
};