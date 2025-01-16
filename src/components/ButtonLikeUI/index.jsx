import React from "react";

import styles from "./index.module.scss";

export const ButtonLikeUI = ({ isLiked, onLikeClick }) => {
  return (
    <div>
      {onLikeClick && (
        <div className={styles.favorite} onClick={onLikeClick}>
          <img
            src={isLiked ? "/icons/like.svg" : "/icons/nolike.svg"}
            alt={isLiked ? "Liked image" : "Unliked image"}
          />
        </div>
      )}
    </div>
  );
};
