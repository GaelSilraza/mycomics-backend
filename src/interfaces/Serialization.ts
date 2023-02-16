import { FormatInterface, GenreInterface, StafferInterface, TagInterface, ChapterInterface, PublisherInterface, RatingInterface } from './';

export interface SerializationInterface {
  id: string;
  name: string;
  alias: string;
  featured: boolean;
  isVisible: boolean;
  ageGroup: number;
  synopsis: string;
  coverUrl: string;
  backgroundWallpaperUrl: string;
  status: string;
  startDate: Date;
  endDate: Date;
  publisherId: string;
  formatId: string;
}