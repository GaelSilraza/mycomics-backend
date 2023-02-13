export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  birth: Date;
  email: string;
  password: string;
  isSuperUser: boolean;
  isActive: boolean;
}