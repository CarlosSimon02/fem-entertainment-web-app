import { Handler } from '@netlify/functions';
import axios from 'axios';

interface Movie {
  original_title: string;
}

const handler: Handler = async (event, context) => {
  const readAccessToken = process.env.REACT_APP_READ_ACCESS_TOKEN;
  const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

  const headers = {
    accept: 'application/json',
    'Accept-Encoding': 'identity',
    Authorization: `Bearer ${readAccessToken}`
  };

  try {
    const response = await axios.get(url, { headers });
    const movies = response.data.results.map(
      (movie: Movie) => movie.original_title
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ movies })
    };
  } catch (error) {
    console.error('Error handling response:', error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

export { handler };
