import axios, { AxiosError } from 'axios';

import {
  CustomResponse,
  MediaCarouselSlideInfo,
  ResponseMediaCarouselSlideInfo,
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
  poster_path,
  vote_average,
  vote_count
}: ResponseMediaCarouselSlideInfo): MediaCarouselSlideInfo => ({
  id,
  title: title || name,
  posterPath: poster_path || '',
  voteAverage: vote_average,
  voteCount: vote_count,
  releaseYear: (release_date || first_air_date)?.split('-')[0] || ''
});

export const sortByVoteCount = (mediaListItems: MediaCarouselSlideInfo[]) => {
  return mediaListItems.sort((a, b) => {
    return (a.voteAverage - b.voteAverage) * -1;
  });
};
