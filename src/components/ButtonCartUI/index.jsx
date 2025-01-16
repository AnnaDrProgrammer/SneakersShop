import React from "react";

import styles from "./index.module.scss";

export const ButtonCartUI = ({ onClickAdd, isAdded }) => {
  return (
    <div>
      {onClickAdd && (
        <div>
          <img
            className={styles.plus}
            onClick={onClickAdd}
            src={isAdded ? "/icons/plusGreen.svg" : "/icons/plus.svg"}
            alt={isAdded ? "cart added" : "remove from cart"}
          />
        </div>
      )}
    </div>
  );
};
