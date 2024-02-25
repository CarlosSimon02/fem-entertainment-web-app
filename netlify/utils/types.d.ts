export enum StatusCode {
  Success = 200,
  Error = 500
}

export type CustomResponse = {
  statusCode: StatusCode;
  headers: {
    'Content-Type': string;
  };
  body: string;
};

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
  title?: string;
  releaseYear?: string;
  rating: MediaRating;
  imagePath: string;
};

type ResponseMediaListItemInfo =
  | {
      adult: boolean;
      id: number;
      release_date: string;
      first_air_date?: never;
      title: string;
      name?: never;
      media_type: string | undefined;
      backdrop_path: string;
    }
  | {
      adult: boolean;
      release_date?: never;
      first_air_date: string;
      title?: never;
      name: string;
      id: number;
      media_type: string | undefined;
      backdrop_path: string;
    };
