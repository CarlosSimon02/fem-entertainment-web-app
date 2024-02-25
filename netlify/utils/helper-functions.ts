import axios, { AxiosError } from 'axios';

import {
  CustomResponse,
  MediaListItemInfo,
  MediaRating,
  MediaType,
  ResponseMediaListItemInfo,
  StatusCode
} from './types.d';

export const fetchTMDBData = async (endpoint: string) => {
  const readAccessToken = process.env.REACT_APP_READ_ACCESS_TOKEN;
  const baseUrl = 'https://api.themoviedb.org/3';
  const headers = {
    accept: 'application/json',
    'Accept-Encoding': 'identity',
    Authorization: `Bearer ${readAccessToken}`
  };

  try {
    const response = await axios.get(
      `${baseUrl}${endpoint}&include_adult=true`,
      { headers }
    );
    return response.data;
  } catch (unknownError) {
    const axiosError = unknownError as AxiosError<{
      status_message: string;
    }>;
    logAxiosError(axiosError);
    throw new Error();
  }
};

export const createCustomResponse = (
  statusCode: StatusCode,
  data: Object
): CustomResponse => {
  return {
    statusCode: statusCode,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
};

export const logAxiosError = (
  error: AxiosError<{
    status_message: string;
  }>
) => {
  if (error.response) {
    const { status, data } = error.response;
    console.error(data.status_message, status);
  } else if (error.request) {
    console.error(`No response received`, StatusCode.Error);
  } else {
    console.error(`Request set up error`, StatusCode.Error);
  }
};

export const mapToMediaListItemInfo = ({
  id,
  title,
  name,
  release_date,
  first_air_date,
  adult,
  backdrop_path,
  media_type
}: ResponseMediaListItemInfo): MediaListItemInfo => ({
  id,
  mediaType: media_type === 'tv' ? MediaType.TVSeries : MediaType.Movie,
  title: title || name,
  releaseYear: (release_date || first_air_date)?.split('-')[0] || '',
  rating: adult ? MediaRating.R : MediaRating.G,
  imagePath: backdrop_path || ''
});

export const shuffleMediaListItems = (mediaListItems: MediaListItemInfo[]) => {
  for (let i = mediaListItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mediaListItems[i], mediaListItems[j]] = [
      mediaListItems[j],
      mediaListItems[i]
    ];
  }
};
