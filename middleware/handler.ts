// import { Request, Response, NextFunction } from 'express';
// import {ServiceResponse} from '../utils/service_response';

// export function controllerHandler(
//   controller: (req: Request, res: Response, next: NextFunction) => Promise<any>
// ) {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const data:ServiceResponse = await controller(req, res, next);
//       res.json({ success: data.success, data ,status_code:data.status_code });
//     } catch (error) {
//       res.status(500).json({ success: false, message: error instanceof Error ? error.message : String(error), status_code:"500" });
//     }
//   };

// }