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
    let url: string;

    switch (type) {
      case 'all':
        url = '/trending/all/day?language=en-US';
        break;
      case 'movies':
        url = '/trending/movie/day?language=en-US';
        break;
      case 'tvseries':
        url = '/trending/tv/day?language=en-US';
        break;
      default:
        return createCustomResponse(StatusCode.Error, {
          error: 'queryStringParameteres should only be movies or tvseries'
        });
    }

    const { results } = await fetchTMDBData(url);

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
