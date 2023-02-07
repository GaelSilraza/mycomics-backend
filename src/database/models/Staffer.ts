import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}