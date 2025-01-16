import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      {/* Левая часть хэдера */}
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      {/* Правая часть хэдера */}
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/icons/cart.svg" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-30">
          <Link to="/favorites">
            <img width={18} height={18} src="/icons/like.svg " />
          </Link>
          <span>Закладки</span>
        </li>

        <li className="mr-30">
          <Link to="/orders">
            <img width={18} height={18} src="/icons/user.svg" />
          </Link>
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}
export default Header;
