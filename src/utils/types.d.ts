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

export type CSSProperty =
  | 'padding-inline'
  | 'padding-block'
  | 'width'
  | 'border-radius'
  | 'font-size'
  | 'max-width'
  | 'margin-inline'
  | 'margin-block'
  | 'padding-block-start'
  | 'padding-block-end'
  | 'gap'
  | 'margin-block-start'
  | 'margin-block-end'
  | 'column-gap'
  | 'row-gap'
  | 'height'
  | 'padding';
