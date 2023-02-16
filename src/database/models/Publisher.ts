import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Serialization, PublisherEmployee } from './';

@Entity('publishers')
export class Publisher extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', nullable: false, length: 160, unique: true })
  name: string;

  @Column('varchar', { name: 'alias', nullable: true, length: 160 })
  alias: string;

  @Column('boolean', { name: 'is_active', nullable: false, default: false })
  isActive: boolean;

  @OneToMany(() => Serialization, (serialization) => serialization.id, { cascade: true })
  serialization: Serialization[];

  @OneToMany(() => PublisherEmployee, (publisherEmployee) => publisherEmployee.id, { cascade: true })
  publisherEmployee: PublisherEmployee[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}