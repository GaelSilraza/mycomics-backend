import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Serialization } from './';

@Entity('tags')
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', nullable: false, length: 150, unique: true })
  name: string;

  @Column('varchar', { name: 'description', nullable: false, length: 500 })
  description: string;

  @ManyToMany(() => Serialization, (serialization) => serialization.id, { cascade: true })
  serialization: Serialization[];
}