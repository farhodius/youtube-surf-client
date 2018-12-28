import {ResourceInterface} from './ResourceInterface';
export interface VideoInterface extends ResourceInterface {
  channelId: string;
  channelTitle: string;
}
