import React from "react";
import { StyledCardActionButtons } from "./CardActionButtons.styled";
import { ReactComponent as HeartIcon } from "../../../assets/svg/heart-icon.svg";
import { ReactComponent as HeartFilledIcon } from "../../../assets/svg/heart-filled-icon.svg";
import { ReactComponent as CompareIcon } from "../../../assets/svg/compare-icon.svg";
import { ReactComponent as NoteIcon } from "../../../assets/svg/note-icon.svg";

export const CardActionButtons = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <StyledCardActionButtons>
      <NoteIcon cursor="pointer" />
      <CompareIcon cursor="pointer" />
      {isLiked ? (
        <HeartFilledIcon cursor="pointer" onClick={handleLike} />
      ) : (
        <HeartIcon cursor="pointer" onClick={handleLike} />
      )}
    </StyledCardActionButtons>
  );
};
