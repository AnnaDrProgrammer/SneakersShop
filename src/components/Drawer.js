function Drawer() {
  return (
    <div  className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/icons/cartItemBtn.svg"
            alt="Remove"
          />
        </h2>
        {/* Продукты в корзине */}
        <div className="items">
          {/* 1ая пара кроссовок */}
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/icons/cartItemBtn.svg"
              alt="Remove"
            />
          </div>
          {/* 2ая пара кроссовок */}
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/icons/cartItemBtn.svg"
              alt="Remove"
            />
          </div>
        </div>
        {/* Низ корзины */}
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/icons/cartArrow.svg" alt="Arrow" />
          </button>
        </div>
        {/* ---------- */}
      </div>
    </div>
  );
}

export default Drawer;

// style={{ display: "none" }}