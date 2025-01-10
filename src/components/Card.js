function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/icons/nolike.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column align-center">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/icons/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
