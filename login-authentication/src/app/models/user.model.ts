export class User {
      username: string;
      password: string;
      email: string;
      name: string;
      contactno: number;
      date: Date;
   /*local: {
      username: string;
      password: string;
      email: string;
      name: string;
      contactno: number;
      date: Date;
   };
   facebook: {
      username: string;
      password: string;
      email: string;
      name: string;
      contactno: number;
      date: Date;
   };
   twitter: {
      username: string;
      password: string;
      email: string;
      name: string;
      contactno: number;
      date: Date;
   };
   github: {
      username: string;
      password: string;
      email: string;
      name: string;
      contactno: number;
      date: Date;
   };
   linkedin: {
      username: string;
      password: string;
      email: string;
      name: string;
      contactno: number;
      date: Date;
   };
   google: {
      username: string;
      password: string;
      email: string;
      name: string;
      contactno: number;
      date: Date;
   };

   */
}
export interface UserDetails {
   _id: string;
   email: string;
   name: string;
   exp: number;
   iat: number;
 }
interface TokenResponse {
   token: string;
 }

export interface TokenPayload {
   email: string;
   password: string;
   name?: string;
 }
