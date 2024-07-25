import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';

export const ApiResponseError = (e: any, res: Response) => {
  switch (e.name) {
    case 'NotFoundException': {
      res.status(HttpStatus.NOT_FOUND);
      return {
        status: 404,
        message: e.response.message,
      };
    }
    case 'ZodError': {
      res.status(HttpStatus.BAD_REQUEST);
      return {
        status: 400,
        message: e.issues,
      };
    }
  }
};
