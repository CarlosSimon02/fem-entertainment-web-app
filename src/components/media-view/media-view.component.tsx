import { useEffect, useState } from 'react';

import axios, { AxiosError } from 'axios';

import { logAxiosError } from '../../utils/functions';
import { MediaListItemInfo } from '../../utils/types.d';
import MediaCard, { MediaCardType } from '../media-card/media-card.component';
import {
  StyledContainer,
  StyledItemsContainer,
  StyledTitle
} from './media-view.styles';

export enum MediaViewType {
  Horizontal,
  Vertical
}

type MediaViewProps = {
  title: string;
  urlEndpoint: string;
  type?: MediaViewType;
};

const MediaView = ({ title, urlEndpoint, type }: MediaViewProps) => {
  const [mediaListItems, setMediaListItems] = useState<MediaListItemInfo[]>([]);

  useEffect(() => {
    const fetchMediaList = async () => {
      try {
        const response = await axios.get(`/.netlify/functions${urlEndpoint}`);
        setMediaListItems(response.data.mediaListItems);
      } catch (error) {
        logAxiosError(error as AxiosError<{ error: string }>);
      }
    };

    fetchMediaList();
  }, [urlEndpoint]);

  return (
    <StyledContainer $isHorizontal={MediaViewType.Horizontal === type}>
      <StyledTitle>{title}</StyledTitle>
      <StyledItemsContainer>
        {mediaListItems.map((mediaItem) => (
          <MediaCard
            key={mediaItem.id}
            info={mediaItem}
            type={
              MediaViewType.Horizontal === type
                ? MediaCardType.Big
                : MediaCardType.Medium
            }
          />
        ))}
      </StyledItemsContainer>
    </StyledContainer>
  );
};

export default MediaView;
