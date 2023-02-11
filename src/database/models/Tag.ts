import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Serialization } from './';

@Entity('tags')
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: false, length: 150 })
  name: string;

  @Column('varchar', { name: 'description', nullable: false, length: 500 })
  description: string;

  @ManyToMany(() => Serialization, (serialization) => serialization.id, { cascade: true })
  serialization: Serialization[];
}