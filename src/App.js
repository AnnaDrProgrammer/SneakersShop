import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

function App() {
  return (
    // боковое окно корзины
    <div className="wrapper clear">
      {/* Шапка-хэдер */}
      <Header />
      <Drawer />
      {/* Панель всех кроссовок */}
      <div className="content p-40">
        {/* все кроссовки-заголовок */}
        <div className="d-flex align-center justify-between  mb-40">
          <h1>Все кроссовки</h1>
          {/* Панель поиска */}
          <div className="search-block d-flex">
            <img src="/icons/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        {/* Модели кроссовок */}
        <div className="d-flex">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
