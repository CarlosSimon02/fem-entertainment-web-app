import { Handler } from '@netlify/functions';

import {
  createCustomResponse,
  fetchTMDBData,
  mapToMediaListItemInfo
} from '../utils/helper-functions';
import { ResponseMediaListItemInfo, StatusCode } from '../utils/types.d';

const handler: Handler = async () => {
  try {
    const { results } = await fetchTMDBData(
      '/movie/top_rated?language=en-US&page=1'
    );

    const mediaListItems = results.map((item: ResponseMediaListItemInfo) =>
      mapToMediaListItemInfo({ ...item, media_type: 'tv' })
    );

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
