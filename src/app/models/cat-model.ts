import { breed } from './breed-model';

export interface cat {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: breed[];
}
