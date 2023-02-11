import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Serialization } from './';

@Entity('genres')
export class Genre extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: false, length: 150 })
  name: string;

  @ManyToMany(() => Serialization, (serialization) => serialization.id, { cascade: true })
  serialization: Serialization[];
}