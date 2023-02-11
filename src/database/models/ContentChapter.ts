import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Chapter } from './';

@Entity('contents_chapters')
export class ContentChapter extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column('int4', { name: 'order', nullable: false })
  order: number;

  @Column('varchar', { name: 'page_url', nullable: true, length: 1500 })
  pageUrl: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.id)
  @JoinColumn({ name: 'chapter_id' })
  chapter: Chapter;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}