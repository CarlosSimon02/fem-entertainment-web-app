import { Handler } from '@netlify/functions';

import {
  createCustomResponse,
  fetchTMDBData,
  mapToMediaListItemInfo,
  sortByVoteCount
} from '../utils/helper-functions';
import {
  MediaCarouselSlideInfo,
  ResponseMediaCarouselSlideInfo,
  StatusCode
} from '../utils/types.d';

const handler: Handler = async (event, context) => {
  if (!event.queryStringParameters)
    return createCustomResponse(StatusCode.Error, {
      error:
        'Please include type as queryStringParameteres (e.g. "all", "movies","tvseries")'
    });

  const { type } = event.queryStringParameters;

  try {
    let results: ResponseMediaCarouselSlideInfo[] = [];

    if (type === 'all' || type === 'movies') {
      const { results: tvSeriesResults } = await fetchTMDBData(
        '/tv/popular?language=en-US&page=1'
      );
      results = [...results, ...tvSeriesResults];
    }

    if (type === 'all' || type === 'tvseries') {
      const { results: moviesResults } = await fetchTMDBData(
        '/movie/popular?language=en-US&page=1'
      );

      results = [...results, ...moviesResults];
    }

    let listItems = results.map(
      (mediaListItem: ResponseMediaCarouselSlideInfo): MediaCarouselSlideInfo =>
        mapToMediaListItemInfo(mediaListItem)
    );

    listItems = sortByVoteCount(listItems).slice(0, 20);

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
