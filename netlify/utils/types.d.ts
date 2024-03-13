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

export type MediaCarouselSlideInfo = {
  id: number;
  title?: string;
  posterPath: string;
  releaseYear: string;
  voteAverage: number;
  voteCount: number;
};

type ResponseMediaCarouselSlideInfo =
  | {
      id: number;
      release_date: string;
      first_air_date?: never;
      title: string;
      name?: never;
      poster_path: string;
      vote_average: number;
      vote_count: number;
    }
  | {
      release_date?: never;
      first_air_date: string;
      title?: never;
      name: string;
      id: number;
      poster_path: string;
      vote_average: number;
      vote_count: number;
    };
