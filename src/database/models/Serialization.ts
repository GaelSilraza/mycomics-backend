import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Publisher } from './Publisher';
import { Format } from './Format';

@Entity('serializations')
export class Serialization extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', nullable: false, length: 160 })
  name: string;

  @Column('varchar', { name: 'alias', nullable: true, length: 160 })
  alias: string;

  @Column('boolean', { name: 'featured', nullable: false, default: false })
  featured: boolean;

  @Column('boolean', { name: 'is_visible', nullable: false, default: false })
  isVisible: boolean;

  @Column('smallint', { name: 'age_group', nullable: false })
  ageGroup: number;

  @Column('varchar', { name: 'synopsis', nullable: false, length: 1500 })
  synopsis: string;

  @Column('varchar', { name: 'cover_url', nullable: false, length: 1500 })
  coverUrl: string;

  @Column('varchar', { name: 'background_wallpaper_url', nullable: true, length: 1500 })
  backgroundWallpaperUrl: string;

  //Depois colocar status como: em lançamento, finalizada, etc
  @Column('varchar', { name: 'status', nullable: false, length: 10 })
  status: string;

  @Column('date', { name: 'start_date', nullable: false, default: new Date() })
  startDate: Date;

  @Column('date', { name: 'end_date', nullable: true })
  endDate: Date;

  @ManyToOne(() => Publisher, (publisher) => publisher.id)
  @JoinColumn({name: 'publisher_id'})
  publisher: Publisher;

  @Column('varchar', {name: 'publisher_id', nullable: false})
  publisherId: string;

  @ManyToOne(() => Format, (format) => format.id)
  @JoinColumn({name: 'format_id'})
  format: Format;

  @Column('int4', {name: 'format_id', nullable: false})
  formatId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}