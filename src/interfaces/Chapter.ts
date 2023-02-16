import { SerializationInterface, ContentChapterInterface } from './';

export interface ChapterInterface {
  id: string;
  name: string;
  remark: string;
  order: number;
  thumbnailUrl: string;
  serialization: SerializationInterface[];
  contentChapter: ContentChapterInterface[];

}