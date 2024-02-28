export enum MediaRating {
  G = 'G',
  R = '18+'
}

export enum MediaType {
  TVSeries = 'TV Series',
  Movie = 'Movie'
}

export type MediaListItemInfo = {
  id: number;
  mediaType: MediaType;
  title: string;
  releaseYear: number;
  rating: MediaRating;
  imagePath: string;
};

export enum StatusCode {
  Success = 200,
  Error = 500
}
