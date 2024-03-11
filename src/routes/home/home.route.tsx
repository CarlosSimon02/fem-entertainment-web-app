import CommonCarousel from '@/components/common-carousel/common-carousel.component';
import UpcomingMoviesSlideshow from '@/components/upcoming-movies-slideshow/upcoming-movies-slideshow.component';

const Home = () => {
  return (
    <>
      <UpcomingMoviesSlideshow />
      <CommonCarousel
        title='Now Showing'
        url='/.netlify/functions/fetchNowShowing?type=all'
      />
      <CommonCarousel
        title='Popular'
        url='/.netlify/functions/fetchPopular?type=all'
      />
      <CommonCarousel
        title='Trending'
        url='/.netlify/functions/fetchTrending?type=all'
      />
      <CommonCarousel
        title='Top Rated'
        url='/.netlify/functions/fetchTopRated?type=all'
      />
      <CommonCarousel
        title='Movie Genres'
        url='/.netlify/functions/fetchGenres?type=movies'
        type='genre'
      />
      <CommonCarousel
        title='TV Series Genres'
        url='/.netlify/functions/fetchGenres?type=tvseries'
        type='genre'
      />
    </>
  );
};

export default Home;
