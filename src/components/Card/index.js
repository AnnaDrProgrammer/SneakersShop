import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import cardStyles from "./Card.module.scss";

function Card({
  onFavorite,
  imageUrl,
  name,
  price,
  onPlus,
  favorited = false,
  id,
  loading = true,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, name, imageUrl, price };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={cardStyles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={cardStyles.favorite} onClick={onClickFavorite}>
              <img
                src={isFavorite ? "/icons/like.svg" : "/icons/nolike.svg"}
                alt="Unliked"
              />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="" />
          <h5>{name}</h5>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column align-center">
              <span>Цена:</span>
              <b>{price}руб.</b>
            </div>
            <div>
              {onPlus && (
                <img
                  className={cardStyles.plus}
                  onClick={onClickPlus}
                  src={
                    isItemAdded(id) ? "/icons/plusGreen.svg" : "/icons/plus.svg"
                  }
                  alt=""
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
