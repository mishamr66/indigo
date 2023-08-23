import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';



@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const expectedToken = process.env.STATIC_TOKEN; 

    // Check if the 'Authorization' header is present
    const authToken = req.headers['authorization'];

    if (!authToken || authToken !== `Bearer ${expectedToken}`) {
      // If the token is missing or doesn't match the expected value, return an unauthorized response
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Token is valid, continue to the next middleware or route handler
    next();
  }
}
