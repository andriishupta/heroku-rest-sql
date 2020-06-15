import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  ManyToOne,
  ManyToMany
} from 'typeorm';
import { User } from './User';
import { PhotoMetadata } from './PhotoMetadata';
import { Album } from './Album';

@Entity()
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fileName!: string;

  @Column()
  description!: string;

  @OneToOne(type => PhotoMetadata, photoMetadata => photoMetadata.photo)
  metadata!: PhotoMetadata;

  @ManyToOne(type => User, user => user.photos)
  user!: User

  @ManyToMany(type => Album, album => album.photos)
  albums!: Album[]
}
