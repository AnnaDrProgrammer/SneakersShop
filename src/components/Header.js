function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      {/* Левая часть хэдера */}
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      {/* Правая часть хэдера */}
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/icons/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-30">
          <img width={18} height={18} src="/icons/favorite.svg" />
          <span>Закладки</span>
        </li>
        <li className="mr-30">
          <img width={18} height={18} src="/icons/user.svg" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}
export default Header;
