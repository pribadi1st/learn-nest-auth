// declare namespace Express {
//   export interface Request {
//     user: JwtUser;
//   }
//   export interface Response {
//     user: JwtUser;
//   }
// }

import { JwtUser } from './auth/interface/jwt-user.interface';

declare namespace Express {
  interface Request {
    user?: JwtUser; // Adjust the type according to your user object
  }
}
