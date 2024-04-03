import { Breed } from './breed-model';

export interface Cat {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds?: Breed[];
}
