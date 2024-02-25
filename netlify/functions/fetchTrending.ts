import { Handler } from '@netlify/functions';

import {
  createCustomResponse,
  fetchTMDBData,
  mapToMediaListItemInfo
} from '../utils/helper-functions';
import { ResponseMediaListItemInfo, StatusCode } from '../utils/types.d';

const handler: Handler = async () => {
  try {
    const { results } = await fetchTMDBData('/trending/all/day?language=en-US');
    const mediaListItems = results.map((item: ResponseMediaListItemInfo) =>
      mapToMediaListItemInfo(item)
    );
    return createCustomResponse(StatusCode.Success, {
      mediaListItems
    });
  } catch (unknownError) {
    return createCustomResponse(StatusCode.Error, {
      error: 'Netlify serverless function error'
    });
  }
};

export { handler };
