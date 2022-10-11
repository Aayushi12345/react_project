import {createContext} from 'react';
export const FavoritesContext = createContext({
  ids: [],
  addFavourite: id => {},
  removeFavourite: id => {},
});
function FavoritesContextProvider({children}) {
  const [favouriteMealIds, setFavouriteMealIds] = useStae([]);

  function addFavourite(id) {
    setFavouriteMealIds(currentFavIds => [...currentFavIds, id]);
  }
  function removeFavourite(id) {
    setFavouriteMealIds((currentFavIds) =>currentFavIds.filter((mealId) => mealId  == id)
    );

        //  currentFavIds.filter((mealId) => mealId! ==id));
  }

  const value = {

    ids :favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite:removeFavourite
  }
  return <FavoritesContext.Provider value = {value}>{children}</FavoritesContext.Provider>;
}
export default FavoritesContextProvider;
