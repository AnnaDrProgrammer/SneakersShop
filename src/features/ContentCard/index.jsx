import React from "react";
import AppContext from "../../context";
import { CardUI } from "../../components/CardUI";
import { ButtonCartUI } from "../../components/ButtonCartUI";
import { ButtonLikeUI } from "../../components/ButtonLikeUI";

export const ContentCards = ({ items }) => {
  const {
    favorites,
    onAddToFavorite,
    isLoading,
    isItemAdded,
    isAddedFavorite,
    onAddToCart,
  } = React.useContext(AppContext);

  const onClickFavorite = (item, id) => {
    onAddToFavorite(item);
  };

  return (
    <div>
      {items.map((item, index) => (
        <CardUI
          key={index}
          loading={isLoading}
          likeSlot={
            <ButtonLikeUI
              isLiked={isAddedFavorite(item.id)}
              onLikeClick={() => onClickFavorite(item, index)}
            />
          }
          cartPushSlot={
            <ButtonCartUI
              onClickAdd={() => onAddToCart(item)}
              isAdded={isItemAdded(item.id)}
            />
          }
        />
      ))}
    </div>
  );
};
