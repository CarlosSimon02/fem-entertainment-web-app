import { Handler } from '@netlify/functions';

import {
  createCustomResponse,
  fetchTMDBData,
  mapToMediaListItemInfo,
  shuffleMediaListItems
} from '../utils/helper-functions';
import { ResponseMediaListItemInfo, StatusCode } from '../utils/types.d';

const handler: Handler = async () => {
  try {
    const { results: tvSeriesResults } = await fetchTMDBData(
      '/tv/popular?language=en-US&page=1'
    );
    const { results: moviesResults } = await fetchTMDBData(
      '/movie/popular?language=en-US&page=1'
    );

    const tvSeriesListItems = tvSeriesResults.map(
      (item: ResponseMediaListItemInfo) =>
        mapToMediaListItemInfo({ ...item, media_type: 'tv' })
    );
    const moviesListItems = moviesResults.map(
      (item: ResponseMediaListItemInfo) =>
        mapToMediaListItemInfo({ ...item, media_type: 'movie' })
    );
    const mediaListItems = [...tvSeriesListItems, ...moviesListItems];
    shuffleMediaListItems(mediaListItems);

    return createCustomResponse(StatusCode.Success, {
      mediaListItems
    });
  } catch {
    return createCustomResponse(StatusCode.Error, {
      error: 'Netlify serverless function error'
    });
  }
};

export { handler };
