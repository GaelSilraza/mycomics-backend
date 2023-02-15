import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Serialization } from './';

@Entity('ratings')
export class Rating extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('smallint', { name: 'rating', nullable: false })
  rating: number;

  @ManyToOne(() => Serialization, (serialization) => serialization.id)
  @JoinColumn({ name: 'serialization_id' })
  serialization: Serialization;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}