import { Handler } from '@netlify/functions';

import { createCustomResponse, fetchTMDBData } from '../utils/helper-functions';
import { StatusCode } from '../utils/types.d';

type ResponseGenreCarouselSlideInfo = {
  id: number;
  name: string;
};

type GenreCarouselSlideInfo = {
  id: number;
  name: string;
  posterPaths: [string, string, string, string];
};

const handler: Handler = async (event, context) => {
  if (!event.queryStringParameters)
    return createCustomResponse(StatusCode.Error, {
      error:
        'Please include type as queryStringParameters (e.g. "movies","tvseries")'
    });

  const { type } = event.queryStringParameters;

  try {
    let genres: ResponseGenreCarouselSlideInfo[] = [];

    switch (type) {
      case 'movies':
        const { genres: tvSeriesGenres } = await fetchTMDBData(
          '/genre/movie/list?language=en'
        );
        genres = tvSeriesGenres;
        break;
      case 'tvseries':
        const { genres: moviesGenres } = await fetchTMDBData(
          '/genre/tv/list?language=en'
        );
        genres = moviesGenres;
        break;
      default:
        return createCustomResponse(StatusCode.Error, {
          error: 'queryStringParameteres should only be movies or tvseries'
        });
    }

    let listItems = await Promise.all(
      genres.map(
        async ({
          id,
          name
        }: ResponseGenreCarouselSlideInfo): Promise<GenreCarouselSlideInfo> => {
          let url: string;

          if (type === 'movies') {
            url = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`;
          } else {
            url = `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`;
          }

          const { results: discoverResults } = await fetchTMDBData(url);

          const posterPaths = discoverResults
            .map(({ poster_path }: { poster_path: string }) => {
              return poster_path;
            })
            .slice(0, 4);
          return { id, name, posterPaths };
        }
      )
    );

    console.log(listItems);

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
