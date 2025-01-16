import React from "react";
import cardStyles from "./Card.module.scss";
import { CardSkeleton } from "./CardSkeleton";

export function CardUI({
  likeSlot,
  isLoading,
  imageUrl,
  title,
  price,
  cartPushSlot,
}) {
  return (
    <div className={cardStyles.card}>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <>
          {likeSlot}

          <img width={133} height={112} src={imageUrl} alt="card content" />

          <h5>{title}</h5>

          <div className="d-flex justify-between">
            <div className="d-flex flex-column align-center">
              <span>Цена:</span>
              <b>{price}руб.</b>
            </div>

            {cartPushSlot}
          </div>
        </>
      )}
    </div>
  );
}
