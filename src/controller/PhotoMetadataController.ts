import { NextFunction, Request, Response } from 'express';
import { PhotoMetadata } from '../entity/PhotoMetadata';

export class PhotoMetadataController {
  async all(request: Request, response: Response, next: NextFunction) {
    return PhotoMetadata.find({ relations: ['photo'] });
  }
}
