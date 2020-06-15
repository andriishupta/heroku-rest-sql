import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { Photo } from './Photo';

@Entity()
export class PhotoMetadata extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  width!: number;

  @Column()
  height!: string;

  @OneToOne(type => Photo, photo => photo.metadata)
  @JoinColumn()
  photo!: Photo;
}
