import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Serialization } from './'

@Entity('staffers')
export class Staffer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', nullable: false, length: 160 })
  name: string;

  //Alterar depois pelas opções de trabalho como, por exemplo, ilustrador, autor, etc
  @Column('varchar', { name: 'role', nullable: false })
  role: string;

  @Column('varchar', { name: 'description', nullable: true })
  description: string;

  @ManyToMany(() => Serialization, (serialization) => serialization.id, { cascade: true })
  serialization: Serialization[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}