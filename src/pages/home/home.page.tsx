import { useEffect, useState } from 'react';

const getTrending = async () => {
  const url = '/.netlify/functions/getTrending';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    });
    console.log(response);
    if (!response.ok) {
      console.error(
        'Error fetching data:',
        response.status,
        response.statusText
      );
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.movies;
  } catch (error: any) {
    console.error('Error handling response:', error.message);
  }
};

const Home = () => {
  const [trending, setTrending] = useState<string[]>([]);

  useEffect(() => {
    getTrending()
      .then((movies) => {
        console.log(movies);
        setTrending(movies);
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  }, []);

  return (
    <div>
      {trending.map((movie: string, index) => (
        <h1 key={index}>{movie}</h1>
      ))}
    </div>
  );
};

export default Home;
