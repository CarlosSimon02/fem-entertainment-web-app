import MediaView, {
  MediaViewType
} from '../../components/media-view/media-view.component';
import ViewsContainer from '../../styles/common/views-container';

const Home = () => {
  return (
    <ViewsContainer>
      <MediaView
        title='Trending'
        urlEndpoint='/fetchTrending'
        type={MediaViewType.Horizontal}
      />
      <MediaView title='Recommended For You' urlEndpoint='/fetchRecommended' />
    </ViewsContainer>
  );
};

export default Home;
