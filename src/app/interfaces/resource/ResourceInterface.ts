export interface ResourceInterface {
  id: string;
  title: string;
  description: string;
  resourceType: string;
  saved: boolean;
  thumbnails: {sm: {url: ''}; md: {url: ''}; lg: {url: ''}};
}
