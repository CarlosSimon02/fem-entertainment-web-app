import { StyledBookmarkSVG, StyledButton } from './bookmark.styles';

type BookmarkProps = {
  className?: string;
};

const Bookmark = ({ className }: BookmarkProps) => {
  return (
    <StyledButton className={className}>
      <StyledBookmarkSVG />
    </StyledButton>
  );
};

export default Bookmark;
