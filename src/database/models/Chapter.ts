import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Serialization } from './';
import { ContentChapter } from './ContentChapter';

@Entity('chapters')
export class Chapter extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 150 })
  name: string;

  @Column('varchar', { name: 'remark', nullable: true, length: 500 })
  remark: string;

  @Column('int4', { name: 'order', nullable: false })
  order: number;

  @Column('varchar', { name: 'thumbnail_url', nullable: true, length: 1500 })
  thumbnailUrl: string;

  @ManyToOne(() => Serialization, (serialization) => serialization.id)
  @JoinColumn({ name: 'serialization_id' })
  serialization: Serialization;

  @OneToMany(() => ContentChapter, (contentChapter) => contentChapter.id, { cascade: true })
  contentChapter: ContentChapter[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}