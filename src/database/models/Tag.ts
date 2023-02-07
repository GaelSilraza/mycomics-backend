import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tags')
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: false, length: 150 })
  name: string;

  @Column('varchar', { name: 'description', nullable: false, length: 500 })
  description: string;
}