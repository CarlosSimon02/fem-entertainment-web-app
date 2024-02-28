import MediaView from '../../components/media-view/media-view.component';
import ViewsContainer from '../../styles/common/views-container';

const TVSeries = () => {
  return (
    <ViewsContainer>
      <MediaView title='TV Series' urlEndpoint='/fetchTVSeries' />
    </ViewsContainer>
  );
};

export default TVSeries;
