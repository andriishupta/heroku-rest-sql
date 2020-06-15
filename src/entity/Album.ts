import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Photo } from './Photo';

@Entity()
export class Album extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @ManyToMany(type => Photo, photo => photo.albums)
  @JoinTable()
  photos!: Photo[]
}
