import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @Column('varchar', { name: 'first_name', nullable: false, length: 255 })
  firstName: string;

  @Column('varchar', { name: 'last_name', nullable: false, length: 255 })
  lastName: string;

  @Column('date', { name: 'birth', nullable: false })
  birth: Date;

  @Column('varchar', { name: 'email', nullable: false, unique: true, length: 255 })
  email: string;

  //Quando implementar o o bcrypt, mudar o limite de caracteres
  @Column('varchar', { name: 'password', nullable: false, length: 500 })
  password: string;

  @Column('boolean', { name: 'is_superuser', nullable: false, default: false })
  isSuperUser: boolean;

  @Column('boolean', { name: 'is_active', nullable: false, default: false })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}