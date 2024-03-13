import { Handler } from '@netlify/functions';

import { createCustomResponse, fetchTMDBData } from '../utils/helper-functions';
import { StatusCode } from '../utils/types.d';

type UpcomingMovieInfo = {
  id: number;
  title?: string;
  overview: string;
  backdropPath: string;
  releaseDate: string;
};

type ResponseUpcomingMovie = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
};

const handler: Handler = async () => {
  try {
    const { results } = await fetchTMDBData(
      '/movie/upcoming?language=en-US&page='
    );

    const listItems = results.map(
      ({
        id,
        title,
        overview,
        backdrop_path,
        release_date
      }: ResponseUpcomingMovie): UpcomingMovieInfo => {
        return {
          id,
          title,
          overview,
          backdropPath: backdrop_path,
          releaseDate: new Date(release_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        };
      }
    );

    return createCustomResponse(StatusCode.Success, {
      listItems
    });
  } catch {
    return createCustomResponse(StatusCode.Error, {
      error: 'Netlify serverless function error'
    });
  }
};

export { handler };
