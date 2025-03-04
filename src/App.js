import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import AppContext from "./context";
import Orders from "./pages/Orders";
// -------------------------------------------------------------------------------------------
function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  // -------------------------------------------------------------------------------------------
  React.useEffect(() => {
    async function fetchData() {
      try {
        const cartResponse = await axios.get(
          "https://676a9b65863eaa5ac0df0591.mockapi.io/cart"
        );
        const favoritesResponse = await axios.get(
          "https://6783f0688b6c7a1316f626de.mockapi.io/favorites"
        );
        const itemsResponse = await axios.get(
          "https://676a9b65863eaa5ac0df0591.mockapi.io/sneakersShop"
        );
        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Что-то пошло не так... :(");
      }
    }
    fetchData();
  }, []);
  // -------------------------------------------------------------------------------------------
  const onAddToCart = async (newItemToAdd) => {
    const findItem = cartItems.find(
      (item) => Number(item.parentId) === Number(newItemToAdd.id)
    );
    if (findItem) {
      axios.delete(
        `https://676a9b65863eaa5ac0df0591.mockapi.io/cart/${findItem.id}`
      );

      setCartItems((prev) =>
        prev.filter((item) => Number(item.parentId) !== Number(newItemToAdd.id))
      );
    } else {
      setCartItems((prev) => [...prev, newItemToAdd]);
      const { data } = await axios.post(
        "https://676a9b65863eaa5ac0df0591.mockapi.io/cart",
        newItemToAdd
      );

      setCartItems((prev) =>
        prev.map((item) => {
          console.log({ item, data });
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id,
            };
          }
          return item;
        })
      );
    }
  };
  // -------------------------------------------------------------------------------------------
  const onRemoveItem = (id) => {
    axios.delete(`https://676a9b65863eaa5ac0df0591.mockapi.io/cart/${id}`);
    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  // -------------------------------------------------------------------------------------------
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://6783f0688b6c7a1316f626de.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          `https://6783f0688b6c7a1316f626de.mockapi.io/favorites`,
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  };
  // -------------------------------------------------------------------------------------------
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  // -------------------------------------------------------------------------------------------
  const isItemAdded = (id) => {
    return !!cartItems.find((obj) => Number(obj.parentId) === Number(id));
  };
  // -------------------------------------------------------------------------------------------
  const isAddedFavorite = (id) => {
    return !!favorites.find((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        isAddedFavorite,
        onAddToFavorite,
        onAddToCart,
        isLoading,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;

// React.useEffect(() => {
// fetch("https://676a9b65863eaa5ac0df0591.mockapi.io/sneakersShop")
//   .then((res) => {
//     return res.json();
//   })
//   .then((json) => {
//     setItems(json);
//   });
// }, []);
