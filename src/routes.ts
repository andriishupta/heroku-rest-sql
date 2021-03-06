import { UserController } from './controller/UserController';
import { PhotoController } from './controller/PhotoController';
import { PhotoMetadataController } from './controller/PhotoMetadataController';

export const Routes = [
  {
    method: 'get',
    route: '/users',
    controller: UserController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/users/:id',
    controller: UserController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/users',
    controller: UserController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/users/:id',
    controller: UserController,
    action: 'remove',
  },
  {
    method: 'get',
    route: '/metadata',
    controller: PhotoMetadataController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/photos',
    controller: PhotoController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/photos/:id',
    controller: PhotoController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/photos',
    controller: PhotoController,
    action: 'save',
  },
];
