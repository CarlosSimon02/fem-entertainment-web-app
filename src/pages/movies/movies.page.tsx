import MediaView from '../../components/media-view/media-view.component';
import ViewsContainer from '../../styles/common/views-container';

const Movies = () => {
  return (
    <ViewsContainer>
      <MediaView title='Movies' urlEndpoint='/fetchMovies' />
    </ViewsContainer>
  );
};

export default Movies;
