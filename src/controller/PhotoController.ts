import { NextFunction, Request, Response } from 'express';
import { Photo } from '../entity/Photo';
import { PhotoMetadata } from '../entity/PhotoMetadata';

export class PhotoController {
  async all(request: Request, response: Response, next: NextFunction) {
    return Photo.find({ relations: ['metadata'] });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return Photo.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    const photo = new Photo();
    const { fileName, description, width, height } = request.body
    photo.fileName = fileName;
    photo.description = description;

    const photoMetadata = new PhotoMetadata();
    photoMetadata.width = width;
    photoMetadata.height = height;
    photoMetadata.photo = photo;

    await photo.save();
    await photoMetadata.save();
    return true;
  }
}
